var mysql = require('mysql');

let mysqlConnect = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'api_learn',
        insecureAuth : true
    });
};

module.exports.localConnect = mysqlConnect;