const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');


//To Get the current directory and check for directory exists
module.exports = {
    getCurrentDirectoryBase: () => {
      return path.basename(process.cwd());
    },
  
    directoryExists: (filePath) => {
      return fs.existsSync(filePath);
    }
  };