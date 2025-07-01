import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'
  
  return {
    base: isProduction ? '/sigen1/encarte/': '/',
    plugins: [
      tailwindcss(),
      react()
    ],
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost/sigen1/webservices',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
})
