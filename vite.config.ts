import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react()],
  // This tells Rollup to break out common libraries into separate chunks.
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          sanity: ['@sanity/client', '@sanity/image-url'],
          portableText: ['@portabletext/react']
        }
      }
    }
  }
})
