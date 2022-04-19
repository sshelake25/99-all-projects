const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/', (req, res) => {
    console.log(req.body);
    console.log('I am in post call')
    res.send('I am in post call')
});

app.get('/profile', (req, res) => {
    res.send('I am in profile page')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
