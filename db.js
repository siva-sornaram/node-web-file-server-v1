var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'logindemo'
});

connection.connect((err) => {
    if (err)    throw err;
    console.log("Connected to MySQL !");
});

module.exports = connection;