import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

if (fs.existsSync(distDir)) {
  fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));
  console.log('Copied index.html to 404.html for GitHub Pages SPA support.');
} else {
  console.error('Dist directory not found!');
  process.exit(1);
}
