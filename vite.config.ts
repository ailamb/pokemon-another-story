import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 重要：這裡要填寫你的 GitHub 倉庫名稱
  // 根據你的網址 https://ailamb.github.io/pokemon-another-story/
  base: '/pokemon-another-story/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});