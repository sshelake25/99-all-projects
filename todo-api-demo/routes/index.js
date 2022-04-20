var express = require('express');
var router = express.Router();

let myConRef = require('./../dbConfig/db-test');

let mydbCoon = myConRef();

router.get('/', function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  res.send('Hello world');
  // res.render('index', { title: 'Express' });
});

// create user profile
router.post('/profile', (req, res, next) => {
  let {
    username,
    email,
    password,
    first_name,
    last_name,
    job_title,
    salary,
    create_datetime,
  } = req.body // destructing of object property 

  // let usrname  = req.body.username
  // let email  = req.body.email

  let query = `INSERT INTO user_profile 
            (username, email, password, first_name, last_name, job_title, salary, create_datetime)
             VALUES ('${username}', '${email}', '${password}', '${first_name}', '${last_name}', '${job_title}', ${salary}, '${create_datetime}')`;

  mydbCoon.query(query, (error, result, fields) => {
    if (error) {
      res.send(error);
      throw error;
    } else {
      res.send('user profile added added');
    }
  })

});


/* GET profile details page. */
router.get('/profile', (req, res, next) => {

  mydbCoon.query("select * from user_profile", (err, ress, field) => {
    if (err) throw err;
    res.send(ress);
  })

});


module.exports = router;
