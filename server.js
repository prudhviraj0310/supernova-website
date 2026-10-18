import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 8080;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm'
};

const server = http.createServer((req, res) => {
  const urlObj = new URL(req.url, `http://localhost:${PORT}`);
  let pathname = decodeURIComponent(urlObj.pathname);

  // Default root to index.html
  if (pathname === '/') {
    pathname = '/index.html';
  }

  let localPath = path.join(__dirname, pathname);

  // If path is a directory or route without extension, check for index.html or .html
  if (fs.existsSync(localPath) && fs.statSync(localPath).isDirectory()) {
    const candidate = path.join(localPath, 'index.html');
    if (fs.existsSync(candidate)) {
      localPath = candidate;
    }
  } else if (!fs.existsSync(localPath)) {
    if (fs.existsSync(localPath + '.html')) {
      localPath = localPath + '.html';
    } else if (fs.existsSync(path.join(localPath, 'index.html'))) {
      localPath = path.join(localPath, 'index.html');
    }
  }

  if (fs.existsSync(localPath) && fs.statSync(localPath).isFile()) {
    const ext = path.extname(localPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*'
    });
    fs.createReadStream(localPath).pipe(res);
    return;
  }

  // Fallback 404
  res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<h1>404 Not Found</h1><p>The requested path <code>${pathname}</code> was not found.</p><p><a href="/">Return to Supernova Home</a></p>`);
});

server.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🌟 Supernova.io Complete Website Clone`);
  console.log(`🚀 Serving on http://localhost:${PORT}`);
  console.log(`📁 Directory: ${__dirname}`);
  console.log(`=======================================================`);
});
