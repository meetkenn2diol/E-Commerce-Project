import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

//  https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    //shortcuts for working with url
  server:{
    proxy:{
      '/api':{
        target: "http://localhost:3000"
      },
      '/images':{
        target: "http://localhost:3000"
      }
    }
  }
})
