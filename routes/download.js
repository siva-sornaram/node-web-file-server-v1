const express = require('express');
const downloadjs = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

downloadjs.use(cors());
downloadjs.use(bodyParser.json());

downloadjs.get('/', (req, res) => {
    var fileName = req.query.filename;

    var downloadpath = path.resolve(__dirname, '../uploads');
    res.download(downloadpath+'/'+fileName, (error) => {
        console.log(error);
    });


});

module.exports = downloadjs;
