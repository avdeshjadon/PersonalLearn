import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

async function check() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('NotesDB');
  const doc = await db.collection('java').findOne({ filename: '002__01-what-is-program.md' });
  if (doc) {
    console.log("FOUND DOC IN MONGO:");
    console.log("Filename:", doc.filename);
    console.log("Content length:", doc.content?.length);
    console.log("UpdatedAt:", doc.updatedAt);
    console.log("Content Preview:", doc.content.substring(0, 100));
  } else {
    console.log("DOC NOT FOUND IN MONGO");
  }
  await client.close();
}
check().catch(console.error);
