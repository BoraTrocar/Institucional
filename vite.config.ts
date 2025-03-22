import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Verificar se os certificados existem
const useHttps = () => {
  try {
    const keyPath = path.resolve(__dirname, './ssl/privkey.pem');
    const certPath = path.resolve(__dirname, './ssl/cert.pem');
    if (fs.existsSync(keyPath) && fs.existsSync(certPath)) {
      return {
        key: fs.readFileSync(keyPath),
        cert: fs.readFileSync(certPath),
      };
    }
    return false;
  } catch (e) {
    return false;
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    https: useHttps(),
    port: 444,
  },
});