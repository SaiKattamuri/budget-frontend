import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: false,
    hmr: {
      host: '192.168.0.105',
      protocol: 'ws',
      port: 5173
    }
  }
})