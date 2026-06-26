import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '..', '.env') });

async function clean() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db('NotesDB');
    
    console.log("Dropping 'java' collection to clear duplicates...");
    await db.collection('java').drop();
    console.log("'java' collection dropped successfully.");
  } catch (err) {
    if (err.code === 26) {
       console.log("Collection 'java' does not exist, nothing to drop.");
    } else {
       console.error("Error dropping collection:", err);
    }
  } finally {
    await client.close();
  }
}

clean();
