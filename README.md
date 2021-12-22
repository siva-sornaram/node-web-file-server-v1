# Web-File-Server

Simple Web-File-Server that can be created in your computer and share the files in Local Network.

## Usage :

### First Install the package from NPM

```bash
npm i @siva_sornaram/web-file-server -g
```

Using -g (install globally) to use the CLI tool from anywhere on your computer.

### To Use it from CLI:

```bash
servfiles
```

By Default the port number will be 8081 and the directory will be the directory from where you are executing the above command. For example if you are using the command from Downloads/ directory, then the Downloads directory will be served and it will be the home directory in web page.

To Use your own port number and directory, use the below command

#### or

```bash
servfiles -p 8081 -dir /Location/To/Your/Path
```

To use this in your node app, add the below lines

### Use these lines in your index.js

```bash
const fileserver = require('@siva_sornaram/web-file-server');
fileserver.webFileServer(8081); //port number
```