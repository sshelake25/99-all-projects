
var app = require('express');

let routers = app.Router();
//localhost:3000/payment/process
routers.get('/process', (req, res) => {
    // -- bl -- process

    res.send({
        price: 200,
        label : 'INR'
    });
});


module.exports = routers;