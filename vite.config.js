import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  optimizeDeps: {
    include: [
      'react',
      'react/jsx-runtime',
      'react-dom',
      'react-dom/client',
      'framer-motion',
      'lucide-react',
      'canvas-confetti'
    ]
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          const norm = id.replace(/\\/g, '/');
          if (
            norm.includes('/node_modules/react/') ||
            norm.includes('/node_modules/react-dom/') ||
            norm.includes('/node_modules/scheduler/')
          ) {
            return 'vendor-react';
          }
          if (norm.includes('/node_modules/framer-motion/') || norm.includes('/node_modules/motion-')) {
            return 'vendor-motion';
          }
          if (norm.includes('/node_modules/lucide-react/')) {
            return 'vendor-icons';
          }
          if (norm.includes('/node_modules/canvas-confetti/')) {
            return 'vendor-confetti';
          }
        }
      }
    },
    chunkSizeWarningLimit: 600
  }
});
