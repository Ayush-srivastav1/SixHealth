import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    headers: {
      "Content-Security-Policy":
        "img-src * data: blob: https: http:;"
    },
    port: 5173,
    host: true,
  },
})
