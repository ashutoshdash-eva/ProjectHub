import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({

  root: '.',   // Root = PROJECTHUB folder

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        project1: resolve(__dirname, 'project_1/index.html'),
        project2: resolve(__dirname, 'project_2/index.html'),
      }
    }
  },

  server: {
    open: '/index.html'
  }

})