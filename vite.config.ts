import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import { resolve } from 'path';
import fs from 'fs';

// package.jsonからプロジェクト名を取得
const projectName = JSON.parse(fs.readFileSync(resolve(__dirname, 'package.json'), 'utf-8')).name;

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          title: projectName
        },
      },
      minify: true,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        // 出力ファイルの場所を指定
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'css/[name].min[extname]';
          return 'assets/[name][extname]';
        },
      },
    },
    outDir: 'dist',
    assetsDir: 'css',
  },
});
