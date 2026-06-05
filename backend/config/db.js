import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

export const connectDB = async () => {
  if (!MONGODB_URI) {
    console.error("[ERROR] Missing MONGODB_URI in .env file");
    process.exit(1);
  }

  try {
    console.log("[SERVER] Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI);
    console.log("[SERVER] Connected to MongoDB Atlas successfully!");
    return mongoose.connection.db;
  } catch (error) {
    console.error("[ERROR] MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};
