import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 👇 Add the base property here
  base: '/AI--Chatbot/', 
  plugins: [react()],
})