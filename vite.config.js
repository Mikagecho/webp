import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/canvas/',
    build: {
        rollupOptions: {
            input: {
                webp: 'webp.html'
            }
        }
    }
})
