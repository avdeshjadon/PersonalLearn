import mongoose from 'mongoose';

export const getNote = async (req, res) => {
  try {
    const { folder, filename } = req.params;
    const db = mongoose.connection.db;

    if (!db) {
      return res.status(500).send('Database not initialized');
    }

    const note = await db.collection(folder).findOne({ filename });
    
    if (!note) {
      return res.status(404).send('Note not found in database');
    }
    
    console.log(`[API] Serving ${folder}/${filename} from MongoDB directly to Frontend.`);
    res.setHeader('Cache-Control', 'no-cache'); // Require ETag revalidation
    res.type('text/plain').send(note.content);
  } catch (error) {
    console.error("[ERROR] API Error:", error);
    res.status(500).send('Server Error');
  }
};
