const express = require('express');
const app = express();
const path = require('path');

global.appRootPath = path.resolve(__dirname);

module.exports.webFileServer = function(port) {
    app.use(express.static(path.join(__dirname, 'public')));

    //Arguments to be passed to the command line
    function getArgs () {
        const args = {};
        process.argv
            .slice(3, process.argv.length)
            .forEach( arg => {
            // long arg
            if (arg.slice(0,2) === '--') {
                const longArg = arg.split('=');
                const longArgFlag = longArg[0].slice(2,longArg[0].length);
                const longArgValue = longArg.length > 1 ? longArg[1] : true;
                args[longArgFlag] = longArgValue;
            }
            // flags
            else if (arg[0] === '-') {
                const flags = arg.slice(1,arg.length).split('');
                flags.forEach(flag => {
                args[flag] = true;
                });
            }
        });
        return args;
    }
    const args = getArgs();
    console.log(args);

    
    
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

    function startListening(port = 8081) {
        app.listen(port, (req, res) => console.log("App is running at port ", port) );
    }

    startListening(args.port);
}