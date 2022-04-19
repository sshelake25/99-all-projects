var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/profile', function(req, res, next) {
  res.send('I am in user profile');
});

module.exports = router;
