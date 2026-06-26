import chokidar from 'chokidar';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const notesDir = path.join(__dirname, '..', 'PersonalLearn-Frontend', 'public', 'notes');

console.log("Watching:", notesDir);
const watcher = chokidar.watch(notesDir, {
  ignored: /(^|[\/\\])\../, 
  persistent: true
});

watcher.on('ready', () => console.log('Initial scan complete. Ready for changes'));
watcher.on('all', (event, path) => {
  console.log(event, path);
});
setTimeout(() => {
    console.log('Timeout. Exiting.');
    process.exit(0);
}, 10000);
