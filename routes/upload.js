const express = require('express');
const uploadjs = express();
const bodyParser = require('body-parser');
const path = require('path');
const fsx = require('fs-extra');
var multer = require('multer');

const cors = require('cors');

uploadjs.use(cors());
uploadjs.use(bodyParser.json());

var files = [];

var storage = multer.diskStorage({

    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../uploads'));
    },
    filename : (req, file, callback) => {
        console.log(file);
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
        files.forEach((val, ind) => {
            fsx.move(path.resolve(__dirname, '../uploads')+'/'+val, path.resolve(__dirname, '../uploads')+'/'+relpath+'/'+val, (error) => {
                if(error)   console.log('error : ', error);
                console.log("move success");
            });
        });
    }
    res.send('Files Uploaded Successfully');
});


module.exports = uploadjs;