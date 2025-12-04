const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>WarpHost Test App</title>
      <style>
        body {
          font-family: system-ui, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          margin: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .container {
          text-align: center;
          padding: 2rem;
          background: rgba(255,255,255,0.1);
          border-radius: 16px;
          backdrop-filter: blur(10px);
        }
        h1 { margin: 0 0 1rem 0; }
        p { opacity: 0.9; }
        .status {
          background: #10b981;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          display: inline-block;
          margin-top: 1rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>WarpHost Test App</h1>
        <p>Deployed successfully!</p>
        <p>Time: ${new Date().toISOString()}</p>
        <div class="status">Running on port ${PORT}</div>
      </div>
    </body>
    </html>
  `);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
