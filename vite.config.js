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
        const notesDir = path.resolve(__dirname, 'public/notes')
        server.watcher.add(notesDir)

        const sendReload = (file) => {
          if (!file) return
          if (file.startsWith(notesDir)) {
            server.ws.send({ type: 'custom', event: 'notes-changed', data: { file } })
          }
        }

        server.watcher.on('add', sendReload)
        server.watcher.on('change', sendReload)
        server.watcher.on('unlink', sendReload)
      },
    },
  ],
})
