import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import { connectDB } from './config/db.js';
import noteRoutes from './routes/noteRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import { startSync } from './services/syncService.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// notesDir is effectively projectRoot/public/notes
const notesDir = path.join(__dirname, '..', 'public', 'notes');

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/notes', noteRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = 5001;

async function boot() {
  const db = await connectDB();
  
  app.listen(PORT, () => {
    console.log(`[SERVER] API Server running on http://localhost:${PORT}`);
  });

  // Start two-way sync
  startSync(db, notesDir);
}

boot();
