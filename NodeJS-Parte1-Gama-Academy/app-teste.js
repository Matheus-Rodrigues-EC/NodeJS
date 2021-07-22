const http = require('http');

const HostName = '127.0.0.1';
const Port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Context-Type', 'text/plain');
    res.end('Hello World!');
});

server.listen(Port, HostName, () => {
    console.log(`Server running at http://${HostName}:${Port}/`);
});