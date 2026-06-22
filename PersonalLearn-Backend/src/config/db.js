import mongoose from 'mongoose';
import { ENV } from './env.js';

export const connectDB = async () => {
  try {
    console.log('[SERVER] Connecting to MongoDB...');
    await mongoose.connect(ENV.MONGODB_URI);
    console.log('[SERVER] Connected to MongoDB Atlas successfully!');
    return mongoose.connection.db;
  } catch (error) {
    console.error('[ERROR] MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};
