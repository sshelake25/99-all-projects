var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 
  //res.render('index', { title: 'Express' });
  res.send('hello world');
   next();
});

router.get('/test', function(req, res, next) {
 
  res.render('test', { title: 'Express' });
});

module.exports = router;
