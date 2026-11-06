import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Auto-recover from stale cached chunks after new production deployments
if (typeof window !== 'undefined') {
  window.addEventListener('vite:preloadError', (event) => {
    event.preventDefault();
    const hasReloaded = sessionStorage.getItem('vite_preload_reloaded');
    if (!hasReloaded) {
      sessionStorage.setItem('vite_preload_reloaded', 'true');
      window.location.reload();
    }
  });

  // Clear reload flag once application initializes cleanly
  window.addEventListener('load', () => {
    sessionStorage.removeItem('vite_preload_reloaded');
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
