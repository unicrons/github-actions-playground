const http = require('http');
const fs = require('fs');
const path = require('path');

// Security issue: Hardcoded credentials - Real API patterns that TruffleHog will detect
const GITHUB_TOKEN = 'ghp_wWPw5k4aF6wZjF2Fg7s2h3j4k5l6m7n8o9p0';

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
      // Security issue: Exposing internal information and secrets
      server_info: process.version,
      aws_region: 'us-east-1',
      github_repo: 'security-workshop'
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
        <p>GitHub Token: ${GITHUB_TOKEN}</p>
        <script>
          // Security issue: Exposing secrets in client-side code
          console.log('AWS Secret:', '${AWS_SECRET_KEY}');
          console.log('GitHub Token:', '${GITHUB_TOKEN}');
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
  console.log(`GitHub Token: ${GITHUB_TOKEN}`);
});
