const express = require('express');
const downloadjs = express();
const bodyParser = require('body-parser');
const path = require('path');

downloadjs.use(bodyParser.json());

downloadjs.get('/', (req, res) => {
    var fileName = req.query.filename;

    var downloadpath = appRootPath;
    res.download(downloadpath+'/'+fileName, (error) => {
        console.log(error);
        if (error)  res.status(503).json({
            'status' : 'failed'
        });
    });


});

module.exports = downloadjs;
