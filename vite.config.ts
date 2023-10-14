import { defineConfig } from 'vite'
import packageJson from './package.json';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'
import preact from '@preact/preset-vite'

const pwaOptions: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  mode: 'development',
  base: '/',
  includeAssets: ['favicon.svg'],
  manifest: {
    name: 'The Name Game',
    short_name: 'Name Game',
    theme_color: '#2196f3',
    icons: [
      {
        src: 'pwa-192x192.png', // <== don't add slash, for testing
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/pwa-512x512.png', // <== don't remove slash, for testing
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png', // <== don't add slash, for testing
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: { include: ['firebase/app', 'firebase/analytics'] },
  plugins: [
    preact(),
    VitePWA(pwaOptions)
  ]
})
