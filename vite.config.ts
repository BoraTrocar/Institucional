import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, './ssl/privkey.pem')), // Caminho para o arquivo de chave privada
      cert: fs.readFileSync(path.resolve(__dirname, './ssl/cert.pem')), // Caminho para o arquivo de certificado
    },
    port: 445,
  },
});
