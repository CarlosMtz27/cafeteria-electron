import { defineConfig } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    build: {
      rollupOptions: {
        input: {
          index: 'src/main/index.js'
        }
      }
    }
  },
  preload: {
    build: {
      rollupOptions: {
        input: {
          index: 'src/preload/index.js'
        }
      }
    }
  },
 renderer: {
    root: 'src/renderer',
    plugins: [react({ jsxRuntime: 'automatic' })],
  }
})