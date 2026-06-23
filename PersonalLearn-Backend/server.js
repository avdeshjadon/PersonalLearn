import path from 'path';
import { fileURLToPath } from 'url';

import app from './src/app.js';
import { connectDB } from './src/config/db.js';
import { ENV } from './src/config/env.js';
import { startSync } from './src/services/sync.service.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// notesDir points to the frontend public/notes
const notesDir = path.join(__dirname, '..', 'PersonalLearn-Frontend', 'public', 'notes');

// Global Error Handlers to prevent silent crashes
process.on('uncaughtException', (err) => {
  console.error('[SERVER] UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.error(err.name, err.message, err.stack);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error('[SERVER] UNHANDLED REJECTION! 💥 Shutting down...');
  console.error(err.name, err.message, err.stack);
  // Optionally give the server time to finish requests before exiting
  process.exit(1); 
});

async function boot() {
  const db = await connectDB();
  
  app.listen(ENV.PORT, () => {
    console.log(`[SERVER] API Server running on http://localhost:${ENV.PORT}`);
  });

  // Start two-way sync only in development
  if (process.env.NODE_ENV !== 'production') {
    startSync(db, notesDir);
  } else {
    console.log('[SERVER] Running in Production mode. Chokidar Sync is disabled.');
  }
}

boot();
