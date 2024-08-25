import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import Terminal from 'vite-plugin-terminal'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),Terminal()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
}) 
