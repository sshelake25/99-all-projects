
let mysql = require('mysql2');


let myconn = function () {

    return mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'api_learn',
            insecureAuth: true
        });

}

module.exports = myconn


// // simple query
// myconn.query(
//     'SELECT * FROM `user_profile` ',
//     function (err, results, fields) {
//         console.log(results); // results contains rows returned by server
//         console.log(fields); // fields contains extra meta data about results, if available
//     }
// );

// myconn.end();