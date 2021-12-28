const express = require('express');
const uploadjs = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const fsx = require('fs-extra');
var multer = require('multer');

uploadjs.use(bodyParser.json());

var files = [];

var dir = appRootPath;

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    console.log("Directory Created in ", dir);
}

var storage = multer.diskStorage({

    destination: (req, file, callback) => {
        callback(null, dir);
    },
    filename : (req, file, callback) => {
        // console.log(file);
        files.push(file.originalname);
        callback(null, file.originalname);
    }
});


const upload = multer({ storage: storage });

uploadjs.post('/', upload.any(), (req, res) => {
    var relpath = req.body.relpath;
    console.log(files);
    console.log('relpath in upload : ', relpath);
    if (relpath != '' && relpath != undefined) {
        if (files.length == 0) {
            res.json({
                'status' : 'empty'
            })
        }
        // console.log('files : ', files);
        files.forEach((val, ind) => {
            fsx.move(dir+'/'+val, dir+'/'+relpath+'/'+val, (error) => {
                if(error) {
                    console.log('error : ', error);
                }
                console.log("move success");
            });
        });
    }
    files.length = 0;
    res.json({
        'status' : 'success'
    })
});


module.exports = uploadjs;