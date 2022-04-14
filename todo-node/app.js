const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const webServer = http.createServer(
    (req, res) => {
        console.log(req.headers);
        console.log("========================");

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('thbs-Type', 'angular');
        res.end('Hello World');
    }
)

webServer.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});