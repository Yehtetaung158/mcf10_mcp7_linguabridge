import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Shortens '@/' to 'src/'
    },
  },
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure output folder is specified
  },
});
