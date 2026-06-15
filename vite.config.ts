import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/dragon_test/',
  plugins: [vue()],
  server: {
    proxy: {
      '/upload': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
})
