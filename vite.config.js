import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const optimizedImageReferences = {
  name: 'optimized-image-references',
  enforce: 'pre',
  transform(code, id) {
    if (!id.endsWith('/src/App.jsx') && !id.endsWith('\\src\\App.jsx')) return null
    return code.replaceAll('.png', '.webp')
  },
}

export default defineConfig({
  plugins: [optimizedImageReferences, react()],
  resolve: {
    alias: {
      'lucide-react': fileURLToPath(new URL('./src/lucide-shim.jsx', import.meta.url)),
    },
  },
})
