import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 相対パスでビルド（GitHub Pages等のサブディレクトリ対策）
  server: {
    host: true,
    fs: {
      // プロジェクトルート外のファイルアクセスを許可（一部環境での404対策）
      strict: false,
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  }
});