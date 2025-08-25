import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })
export default defineConfig(({ mode }) => {
  return {
    plugins: [vue()],
    base: mode === 'production'  ?  '/vue-site/'  :  '/',         //예: /my-react-app/  
  }
})