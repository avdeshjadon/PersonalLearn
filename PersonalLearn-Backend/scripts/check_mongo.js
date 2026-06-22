import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

async function run() {
  const client = new MongoClient(process.env.MONGO_URI);
  await client.connect();
  const db = client.db('NotesDB');
  const doc = await db.collection('java').findOne({ filename: '01-what-is-program.md' });
  console.log(doc ? doc.content.substring(0, 50) : 'Not found');
  await client.close();
}
run().catch(console.error);
