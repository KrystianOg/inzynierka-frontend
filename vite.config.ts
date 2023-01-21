import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src"),
      'styles': path.resolve(__dirname, "./src/styles"),
      'components': path.resolve(__dirname, "./src/components"),
      'pages': path.resolve(__dirname, "./src/pages"),
      'hooks': path.resolve(__dirname, "./src/hooks"),
      'utils': path.resolve(__dirname, "./src/utils"),
      'assets': path.resolve(__dirname, "./src/assets"),
      'contexts': path.resolve(__dirname, "./src/contexts"),
      'features': path.resolve(__dirname, "./src/features"),
      'types': path.resolve(__dirname, "./src/types"),
      "app": path.resolve(__dirname, "./src/app"),
      "static": path.resolve(__dirname, "./src/static"),
    }
  },
  plugins: [react()],
  server: {
    port: 3000
  },
})
