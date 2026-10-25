import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for 45° static website
// Generates fully static, highly optimized production assets in /dist
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
  },
});
