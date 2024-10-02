import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages のリポジトリ名に合わせて設定
export default defineConfig({
  base: 'frontend_mentor11',
  plugins: [react()]
});