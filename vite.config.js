import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'watch-public-notes',
      configureServer(server) {
        const notesDir = path.resolve(process.cwd(), 'public/notes')
        console.log('[watch-public-notes] Watching directory:', notesDir);
        server.watcher.add(notesDir)

        const sendReload = (file) => {
          if (!file) return
          console.log('[watch-public-notes] File changed:', file);
          if (file.startsWith(notesDir)) {
            console.log('[watch-public-notes] Sending notes-changed event for:', file);
            server.ws.send({ type: 'custom', event: 'notes-changed', data: { file } })
          } else {
            console.log('[watch-public-notes] File does not start with notesDir');
          }
        }

        server.watcher.on('add', sendReload)
        server.watcher.on('change', sendReload)
        server.watcher.on('unlink', sendReload)
      },
    },
  ],
})
