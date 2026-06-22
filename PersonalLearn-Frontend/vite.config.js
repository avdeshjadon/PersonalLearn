import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true
      }
    }
  },
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'watch-public-notes',
      async configureServer(server) {
        const chokidar = await import('chokidar');
        const notesDir = path.resolve(process.cwd(), 'public/notes')
        console.log('[watch-public-notes] Watching directory with custom chokidar:', notesDir);
        
        const watcher = chokidar.watch(notesDir, {
          ignored: /(^|[\/\\])\../, 
          persistent: true
        });

        const sendReload = (file) => {
          if (!file) return
          if (file.endsWith('.md')) {
            console.log('[watch-public-notes] Markdown file changed, sending reload:', file);
            server.ws.send({ type: 'custom', event: 'notes-changed', data: { file } })
          }
        }

        watcher.on('add', sendReload)
        watcher.on('change', sendReload)
        watcher.on('unlink', sendReload)
      },
    },
  ],
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'chart-vendor': ['recharts'],
          'ui-vendor': ['framer-motion', 'lucide-react'],
          'markdown-vendor': ['marked', 'mermaid']
        }
      }
    }
  }
})
