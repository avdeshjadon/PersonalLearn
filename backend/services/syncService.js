import chokidar from 'chokidar';
import fs from 'fs';
import path from 'path';

const recentlyWrittenFiles = new Set();

export const startSync = (db, notesDir) => {
  // 1. Local -> Mongo
  console.log(`[SYNC] Watching local directory for changes: ${notesDir}`);
  const watcher = chokidar.watch(notesDir + '/**/*.md', {
    ignored: /(^|[\/\\])\../, 
    persistent: true
  });

  const uploadToMongo = async (filePath) => {
    if (recentlyWrittenFiles.has(filePath)) {
      recentlyWrittenFiles.delete(filePath);
      return;
    }
    try {
      const relativePath = path.relative(notesDir, filePath);
      const parts = relativePath.split(path.sep);
      if (parts.length < 2) return; 
      
      const folder = parts[0];
      const filename = parts[parts.length - 1];
      const content = fs.readFileSync(filePath, 'utf-8');

      await db.collection(folder).updateOne(
        { filename },
        { $set: { filename, content, updatedAt: new Date() } },
        { upsert: true }
      );
      console.log(`[SYNC: LOCAL -> MONGO] Uploaded/Updated: ${folder}/${filename}`);
    } catch (err) {
      console.error(`[ERROR] Upload failed for ${filePath}:`, err.message);
    }
  };

  const deleteFromMongo = async (filePath) => {
    try {
      const relativePath = path.relative(notesDir, filePath);
      const parts = relativePath.split(path.sep);
      if (parts.length < 2) return; 
      
      const folder = parts[0];
      const filename = parts[parts.length - 1];

      await db.collection(folder).deleteOne({ filename });
      console.log(`[SYNC: LOCAL -> MONGO] Deleted: ${folder}/${filename}`);
    } catch (err) {
      console.error(`[ERROR] Delete failed for ${filePath}:`, err.message);
    }
  };

  watcher
    .on('add', uploadToMongo)
    .on('change', uploadToMongo)
    .on('unlink', deleteFromMongo);

  // 2. Mongo -> Local
  console.log("[SYNC] Listening for Atlas database changes...");
  const changeStream = db.watch();

  changeStream.on('change', async (change) => {
    try {
      if (!change.ns || !change.ns.coll) return;
      const folder = change.ns.coll;
      
      // Ignore system collections
      if (folder.startsWith('system.') || folder === 'notes') return;

      let noteDoc;

      if (change.operationType === 'insert') {
        noteDoc = change.fullDocument;
      } else if (change.operationType === 'update') {
        // Fetch the full document to get content and filename
        noteDoc = await db.collection(folder).findOne({ _id: change.documentKey._id });
      } else if (change.operationType === 'delete') {
        console.log(`[SYNC: MONGO -> LOCAL] A document was deleted from collection: ${folder}`);
      }

      if (noteDoc && noteDoc.filename && noteDoc.content !== undefined) {
        const { filename, content } = noteDoc;
        const targetDir = path.join(notesDir, folder);
        const targetFile = path.join(targetDir, filename);

        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true });
        }

        let currentContent = '';
        if (fs.existsSync(targetFile)) {
          currentContent = fs.readFileSync(targetFile, 'utf-8');
        }

        if (currentContent !== content) {
          recentlyWrittenFiles.add(targetFile);
          fs.writeFileSync(targetFile, content || '');
          console.log(`[SYNC: MONGO -> LOCAL] Downloaded/Updated local file: ${folder}/${filename}`);
        }
      }
    } catch (err) {
      console.error(`[ERROR] ChangeStream Error:`, err.message);
    }
  });

  changeStream.on('error', (err) => {
    console.warn('[WARNING] Change streams error.', err.message);
  });
};
