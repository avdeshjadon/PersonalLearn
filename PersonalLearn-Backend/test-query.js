import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

async function check() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('NotesDB');
  const docs = await db.collection('java').find({}).toArray();
  docs.forEach(d => console.log(d.filename));
  await client.close();
}
check().catch(console.error);
