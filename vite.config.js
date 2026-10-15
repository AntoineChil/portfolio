import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuration Vite minimale : Vercel détecte automatiquement Vite
// (commande de build : `vite build`, dossier de sortie : `dist`).
export default defineConfig({
  plugins: [react()],
})
