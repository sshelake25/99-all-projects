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
router.post('/', function (req, res, next) {
  res.send('I am post call');
  // dbConnection.query('select * from user_profile', (error, results, fields) => {
  //   if (error) throw error;
  //   res.send(results)
  // });
});

module.exports = router;
