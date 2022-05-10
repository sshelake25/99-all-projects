var mysql = require('mysql');
require('dotenv').config();

// console.log(process.env)

let mysqlConnect = function () {
    return mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        insecureAuth : true
    });
};

module.exports.localConnect = mysqlConnect;