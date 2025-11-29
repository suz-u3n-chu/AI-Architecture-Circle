import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pagesなどのサブディレクトリでホスティングする場合に必須の設定
  base: './', 
});