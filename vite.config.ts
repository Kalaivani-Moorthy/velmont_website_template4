import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: '/velmont_website_template4/',
  plugins: [react(), tailwindcss()],
})