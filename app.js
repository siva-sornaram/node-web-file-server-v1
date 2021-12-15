const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());

app.use(express.static('public'));

// const loginRoute = require('./routes/login');
// app.use('/login', loginRoute);

const getFilesRoute = require('./routes/getfiles');
app.use('/getfiles', getFilesRoute);

const uploadFilesRoute = require('./routes/upload');
app.use('/uploadfiles', uploadFilesRoute);

const downloadFilesRoute = require('./routes/download');
app.use('/downloadfiles', downloadFilesRoute);

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'));
});
app.listen(8081, (req, res) => console.log("App is running at port 8081") );