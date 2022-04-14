require('dotenv').config();

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const webServer = http.createServer(
    (req, res) => {

        console.log(process.env.BATCH)
       // console.log(req.headers);
        console.log("========================");
        console.log('hello world')
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('thbs-Type', 'angular');
        res.end('Hello World');
        process.exit(1)
    }
)

webServer.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});