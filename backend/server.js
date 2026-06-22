import path from 'path';
import { fileURLToPath } from 'url';

import app from './src/app.js';
import { connectDB } from './src/config/db.js';
import { ENV } from './src/config/env.js';
import { startSync } from './src/services/sync.service.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// notesDir is effectively projectRoot/public/notes
const notesDir = path.join(__dirname, '..', 'public', 'notes');

async function boot() {
  const db = await connectDB();
  
  app.listen(ENV.PORT, () => {
    console.log(`[SERVER] API Server running on http://localhost:${ENV.PORT}`);
  });

  // Start two-way sync
  startSync(db, notesDir);
}

boot();
