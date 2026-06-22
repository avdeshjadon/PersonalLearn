import mongoose from 'mongoose';

export const getNoteByFolderAndFilename = async (folder, filename) => {
  const db = mongoose.connection.db;
  if (!db) throw new Error('Database not initialized');
  return await db.collection(folder).findOne({ filename });
};
