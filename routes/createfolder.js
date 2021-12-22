const express = require('express');
const newFolder = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
// const cors = require('cors');

// newFolder.use(cors());

newFolder.use(bodyParser.urlencoded({ extended: false }));

newFolder.use(bodyParser.json());

newFolder.post('/', (req, res) => {
    var dir = appRootPath;
    console.log(req.body);
    var folname = req.body.foldername;
    var relpath = req.body.relpath;

    console.log('folname in createfolder : ', folname, 'relpath in createfolder : ', relpath);
    console.log('dir in createfolder : ', dir);
    console.log('!fs.existsync : ', !fs.existsSync(dir));

    if (relpath == 'root') {
        if (!fs.existsSync(dir+'/'+folname)) {
            fs.mkdirSync(dir+'/'+folname);
            console.log("Directory Created in ", dir+'/'+folname);
            res.json({
                'status' : 'success'
            });
        }
    }

    if (relpath != undefined && relpath != '' && relpath != 'root') {
        if (!fs.existsSync(dir+'/'+relpath+'/'+folname)) {
            fs.mkdirSync(dir+'/'+relpath+'/'+folname);
            console.log("Directory Created in ", dir+'/'+relpath+'/'+folname);
            res.json({
                'status' : 'success'
            });
        } else {
            console.log("Directory already exists");
            res.json({
                'status' : 'already-present'
            })
        }
    }

});

module.exports = newFolder;