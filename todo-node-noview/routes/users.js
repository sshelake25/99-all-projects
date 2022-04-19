var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


/* POST users listing. */
router.post('/', function (req, res, next) {

 // console.log(req);

  res.send('added user into db');
});


module.exports = router;
