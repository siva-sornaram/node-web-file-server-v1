const express = require('express');
const getfiles = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const fileOptions = require('../fileoptions');
// const cors = require('cors');

// getfiles.use(cors());
getfiles.use(bodyParser.json());

var final_files = [];

var totalPath = appRootPath;

class File {
    constructor(id, fname, isDir, filePath, size, lmod) {
        this.id = id;
        this.fname = fname;
        this.isDir = isDir;
        this.filePath = filePath;
        this.size = size;
        this.lmod = lmod;
        return this;
    }
}


getfiles.get('/', (req, res) => {
    console.log(req.body);
    var relpath = req.body.relpath;
    console.log("path : " , relpath);

    if (fileOptions.directoryExists(totalPath)) {
        console.log("Directory Exits");
        console.log(fs.statSync(totalPath).mtime);
        try {
            if (relpath == '' || relpath == undefined) {
                console.log('relpath is empty');
                var files = fs.readdirSync(totalPath);
                files.forEach((val, ind) => {
                    var fileobj = new File(ind+1, val, fs.statSync(totalPath+'/'+val).isDirectory(), val, fs.statSync(totalPath+'/'+val).size, fs.statSync(totalPath+'/'+val).mtime);
                    final_files.push(fileobj);
                });
            } else {
                console.log('relpath is : ' , relpath);
                var files = fs.readdirSync(totalPath+'/'+relpath);
                files.forEach((val, ind) => {
                    var fileobj = new File(ind+1, val, fs.statSync(totalPath+'/'+relpath+'/'+val).isDirectory(), relpath+'/'+val, fs.statSync(totalPath+'/'+relpath+'/'+val).size, fs.statSync(totalPath+'/'+relpath+'/'+val).mtime);
                    final_files.push(fileobj);
                });
            }
            console.log(files);
        } catch (err){
            console.log(err);
        }

        

        res.json(final_files);
        final_files.length = 0;

    }
});


getfiles.get('/*', (req, res) => {
    console.log(req.body);
    var relpath = req.params[0];
    console.log("path : " , relpath);
    if (fileOptions.directoryExists(totalPath)) {
        console.log("Directory Exits");
        console.log(fs.statSync(totalPath).size);
        try {
            if (relpath == '' || relpath == undefined) {
                console.log('relpath is empty');
                var files = fs.readdirSync(totalPath);
                files.forEach((val, ind) => {
                    var fileobj = new File(ind+1, val, fs.statSync(totalPath+'/'+val).isDirectory(), val, fs.statSync(totalPath+'/'+val).size, fs.statSync(totalPath+'/'+val).mtime);
                    final_files.push(fileobj);
                });
            } else {
                console.log('relpath is : ' , relpath);
                var files = fs.readdirSync(totalPath+'/'+relpath);
                files.forEach((val, ind) => {
                    var fileobj = new File(ind+1, val, fs.statSync(totalPath+'/'+relpath+'/'+val).isDirectory(), relpath+'/'+val, fs.statSync(totalPath+'/'+relpath+'/'+val).size, fs.statSync(totalPath+'/'+relpath+'/'+val).mtime);
                    final_files.push(fileobj);
                });
            }
            console.log(files);
        } catch (err){
            console.log(err);
        }

        

        res.json(final_files);
        final_files.length = 0;

    }
});

module.exports = getfiles;