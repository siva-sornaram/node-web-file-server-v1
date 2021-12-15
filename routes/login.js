const express = require('express');
const login = express();
const db = require('../db');
const bodyParser = require('body-parser');

const user = [];

login.use(bodyParser.json());


login.post('/', (req, res) => {
    console.log(req.body);
    const username = req.body.uname;
    const password = Buffer.from(req.body.pass).toString('base64');
    const sql = "SELECT * FROM usernames WHERE username = ? AND password = ?";
    if (username == null) {
        res.set(200).send('Username cant be empty');
    }
    db.query(sql, [username, password], (error, results, fields) => {
        console.log("username : ", username, "password : ", password);

        if (results.length > 0) {
            res.json({
                "uname": username,
                "isvalidated": true
            });
        } else {
            res.json({
                "uname": "",
                "isvalidated": false
            });
        }
    });

});

module.exports = login;