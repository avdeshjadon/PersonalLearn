import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import logger from './utils/logger'

// Show brand on init
logger.brand();
logger.info('App', 'Starting React application...');


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Dev-only: listen for custom HMR event to reload while preserving hash/route
if (import.meta.env.DEV && import.meta.hot) {
  import.meta.hot.on('notes-changed', (data) => {
    try {
      console.log('[HMR] notes changed:', data)
      // Reload current page (preserves hash) so SPA stays on the same note
      window.location.reload()
    } catch (e) {
      console.error('Reload failed', e)
    }
  })
}
