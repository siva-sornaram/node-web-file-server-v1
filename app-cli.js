#!/usr/bin/env node

const express = require('express');
const app = express();
const path = require('path');
const fileOptions = require(path.resolve(__dirname, './fileoptions'));
const { program } = require('commander');
const morgan = require('morgan');
program.version('0.0.1');

// morgan.token('date', function() {
//     var newDate = new Date().toLocaleString("en-US", { timeZone: 'Asia/Kolkata' });
//     return newDate;
// });

// app.use(morgan('Remote Addr \: :remote-addr \n -- Remote User \: :remote-user at [:date] \n -- Method \: :method \n -- URL \: :url - HTTP/:http-version \n -- Status Code \: :status at :response-time ms \n -- Referrer \: :referrer \n -- User Agent \: :user-agent'));

//app.use(morgan('common'));
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'));

global.appRootPath = process.cwd();
global.portNum = 8081;
console.log('appRootPath : ', appRootPath);

    //Arguments to be passed to the command line
    program
        .option('-p, --port <value>', "Enter the port number to be served. Default value : 8081")
        .option('-dir, --path <value>', "Enter the Path from where the files to be listed. Default value : Current Directory")
        .action((value) => {
            console.log('values : ', value);
            if (value.port !== undefined && value.port !== '') portNum = value.port;
            if (value.path !== undefined && value.path !== '') appRootPath = value.path;
        });

program.parse(process.argv);

console.log('portnum : ', portNum, 'approotpath : ', appRootPath);

app.use(express.static(path.join(__dirname, 'public')));


    const getFilesRoute = require('./routes/getfiles');
    app.use('/getfiles', getFilesRoute);

    const uploadFilesRoute = require('./routes/upload');
    app.use('/uploadfiles', uploadFilesRoute);

    const downloadFilesRoute = require('./routes/download');
    app.use('/downloadfiles', downloadFilesRoute);

    const createFolderRoute = require('./routes/createfolder');
    app.use('/createfolder', createFolderRoute);
    //Redirect every other requests to the index.html as it is a single page applicaiton
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, './public/index.html'));
    });

    function startListening(portNum) {
        app.listen(portNum, (req, res) => console.log("App is running at port ", portNum) );
    }

    startListening(portNum);
