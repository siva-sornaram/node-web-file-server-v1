const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
global.appRootPath = path.resolve(__dirname);

// morgan.token('date', function() {
//     var newDate = new Date().toLocaleString("en-US", { timeZone: 'Asia/Kolkata' });
//     return newDate;
// });

// app.use(morgan('Remote Addr \: :remote-addr \n -- Remote User \: :remote-user at [:date] \n -- Method \: :method \n -- URL \: :url - HTTP/:http-version \n -- Status Code \: :status at :response-time ms \n -- Referrer \: :referrer \n -- User Agent \: :user-agent'));

//app.use(morgan('common'));
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'));

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
    // console.log(args);

    
    
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