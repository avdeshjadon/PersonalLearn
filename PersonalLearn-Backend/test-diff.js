import { MongoClient } from 'mongodb';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const notesDir = path.join(__dirname, '..', 'PersonalLearn-Frontend', 'public', 'notes');
const localFilePath = path.join(notesDir, 'java', '002__01-what-is-program.md');

async function check() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('NotesDB');
  const doc = await db.collection('java').findOne({ filename: '002__01-what-is-program.md' });
  
  const localContent = fs.readFileSync(localFilePath, 'utf-8');
  console.log("Local size:", localContent.length);
  console.log("Mongo size:", doc.content.length);
  
  if (localContent !== doc.content) {
     console.log("Contents differ!");
     // Find where they differ
     for(let i=0; i<Math.min(localContent.length, doc.content.length); i++) {
        if (localContent[i] !== doc.content[i]) {
            console.log(`Difference at index ${i}`);
            console.log(`Local: ${localContent.substring(i, i+50)}`);
            console.log(`Mongo: ${doc.content.substring(i, i+50)}`);
            break;
        }
     }
  } else {
     console.log("Contents are identical!");
  }
  await client.close();
}
check().catch(console.error);
