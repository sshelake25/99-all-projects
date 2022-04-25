var express = require('express');
var router = express.Router();

let dbConnection = require('./../db/db').localConnect();

/* GET users listing. */

//localhost:3000/user/--> GET
router.get('/', function (req, res, next) {
  dbConnection.query('select * from user_profile', (error, results, fields) => {
    if (error) throw error;
    res.send(results)
  });

});

//localhost:3000/user/--> POST
router.post('/contact', function (req, res, next) {

  console.log(req.body);
  
  res.send('I am post call');
  // dbConnection.query('select * from user_profile', (error, results, fields) => {
  //   if (error) throw error;
  //   res.send(results)
  // });
});

module.exports = router;
