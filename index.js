// Import the HTTP module
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Send a response to the client
  res.write('Hello, World!');
  
  // End the response
  res.end();
});

// Server listens on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
