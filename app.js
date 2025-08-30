const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);

    res.writeHead(200, { "content-type": "text/plain" });
    res.end("My first node server is running ......")
});

const port = 3000;

server.listen(port, () => {
    console.log(`Node server is running on https://localhost:${port}`);

})