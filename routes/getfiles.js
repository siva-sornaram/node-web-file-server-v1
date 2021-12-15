const express = require('express');
const getfiles = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const cors = require('cors');

getfiles.use(cors());
getfiles.use(bodyParser.json());

var final_files = [];

class File {
    constructor(id, fname, isDir, filePath) {
        this.id = id;
        this.fname = fname;
        this.isDir = isDir;
        this.filePath = filePath;
        return this;
    }
}


getfiles.get('/', (req, res) => {
    console.log(req.body);
    var relpath = req.body.relpath;
    console.log("path : " , relpath);
    fs.access(path.resolve(__dirname, '../uploads'), (error) => {
        if (error) {
            console.log("Directory Does not exist");
        } else {
            console.log("Directory Exists");
        }

        try {
            if (relpath == '' || relpath == undefined) {
                console.log('relpath is empty');
                var files = fs.readdirSync(path.resolve(__dirname, '../uploads'));
                files.forEach((val, ind) => {
                    var fileobj = new File(ind+1, val, fs.statSync(path.resolve(__dirname, '../uploads')+'/'+val).isDirectory(), '/'+val);
                    final_files.push(fileobj);
                });
            } else {
                console.log('relpath is : ' , relpath);
                var files = fs.readdirSync(path.resolve(__dirname, '../uploads')+'/'+relpath);
                files.forEach((val, ind) => {
                    var fileobj = new File(ind+1, val, fs.statSync(path.resolve(__dirname, '../uploads')+'/'+relpath+'/'+val).isDirectory(), relpath+'/'+val);
                    final_files.push(fileobj);
                });
            }
            console.log(files);
        } catch (err){
            console.log(err);
        }

        

        res.json(final_files);
        final_files.length = 0;

    });
});


getfiles.get('/*', (req, res) => {
    console.log(req.body);
    var relpath = req.params[0];
    console.log("path : " , relpath);
    fs.access(path.resolve(__dirname, '../uploads'), (error) => {
        if (error) {
            console.log("Directory Does not exist");
        } else {
            console.log("Directory Exists");
        }

        try {
            if (relpath == '' || relpath == undefined) {
                console.log('relpath is empty');
                var files = fs.readdirSync(path.resolve(__dirname, '../uploads'));
                files.forEach((val, ind) => {
                    var fileobj = new File(ind+1, val, fs.statSync(path.resolve(__dirname, '../uploads')+'/'+val).isDirectory(), '/'+val);
                    final_files.push(fileobj);
                });
            } else {
                console.log('relpath is : ' , relpath);
                var files = fs.readdirSync(path.resolve(__dirname, '../uploads')+'/'+relpath);
                files.forEach((val, ind) => {
                    var fileobj = new File(ind+1, val, fs.statSync(path.resolve(__dirname, '../uploads')+'/'+relpath+'/'+val).isDirectory(), relpath+'/'+val);
                    final_files.push(fileobj);
                });
            }
            console.log(files);
        } catch (err){
            console.log(err);
        }

        

        res.json(final_files);
        final_files.length = 0;

    });
});

module.exports = getfiles;