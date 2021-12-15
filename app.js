const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());

app.use(express.static('public'));

// const loginRoute = require('./routes/login');
// app.use('/login', loginRoute);


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

//Redirect every other requests to the index.html as it is a single page applicaiton
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'));
});
app.listen(8081, (req, res) => console.log("App is running at port 8081") );