import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __COMMIT_SHA__: JSON.stringify(
      process.env.VITE_COMMIT_SHA || process.env.GITHUB_SHA?.substring(0, 7) || 'sha-local'
    ),
    __BUILD_TIMESTAMP__: JSON.stringify(new Date().toISOString()),
    __APP_ENV__: JSON.stringify(process.env.VITE_APP_ENV || 'production'),
  },
  server: {
    port: 5173,
    host: true
  }
});

