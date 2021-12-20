# Web-File-Server

## How to Use :

### First Install the package from NPM

```bash
npm i @siva_sornaram/web-file-server
```

### Use these lines in your index.js

```bash
const fileserver = require('@siva_sornaram/web-file-server');
fileserver.webFileServer(8081); //port number
```

### To Use it from CLI:

```bash
servfiles
```

#### or

```bash
servfiles -p 8081 -dir /Location/To/Your/Path
```