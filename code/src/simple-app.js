const http = require('http');
const fs = require('fs');
const path = require('path');

// Security issue: Hardcoded credentials
const ADMIN_PASSWORD = 'admin123';
const API_KEY = 'sk_test_1234567890abcdef';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  // CORS headers (overly permissive)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (url === '/health' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      // Security issue: Exposing internal information
      server_info: process.version,
      admin_password: ADMIN_PASSWORD // Never expose this!
    }));
  } else if (url === '/' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Workshop App</title>
      </head>
      <body>
        <h1>Simple Workshop Application</h1>
        <p>This is a simple application for security scanning workshop.</p>
        <p>API Key: ${API_KEY}</p>
        <p>Admin Password: ${ADMIN_PASSWORD}</p>
        <script>
          // Security issue: Exposing secrets in client-side code
          console.log('Admin password:', '${ADMIN_PASSWORD}');
        </script>
      </body>
      </html>
    `);
  } else if (url.startsWith('/file/') && method === 'GET') {
    // Security issue: Path traversal vulnerability
    const fileName = url.substring(6);
    const filePath = path.join(__dirname, fileName);

    // No path validation - can access any file!
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      }
    });
  } else {
    // 404 handler
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`Simple server running on port ${PORT}`);
  console.log(`Visit: http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);

  // Security issue: Logging sensitive information
  console.log(`Admin password: ${ADMIN_PASSWORD}`);
  console.log(`API Key: ${API_KEY}`);
});
