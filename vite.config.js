import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/') ||
            id.includes('node_modules/react-helmet-async/')
          ) {
            return 'react-vendor'
          }
          if (id.includes('framer-motion')) return 'motion'
          if (id.includes('react-hook-form') || id.includes('zod') || id.includes('@hookform')) {
            return 'forms'
          }
          if (id.includes('lucide-react')) return 'icons'
          if (id.includes('sonner')) return 'toast'
        },
      },
    },
  },
})
