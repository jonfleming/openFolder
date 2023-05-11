const { exec } = require('child_process');
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    res.setHeader('Content-Type', 'image/x-icon');
    fs.readFile(__dirname + '/favicon.ico', function(err, data) {
      res.end(data);
    });
  } else {
    const path = req.url.split('?')[1]
    openFolder(path)
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Opened ${path}`);
  } 
});    

function openFolder(path) {
    exec(`explorer.exe "${path}"`, (error, stdout, stderr) => {
  });
}
  
server.listen(3000, () => {
  console.log('Server running on port 3000');
});

