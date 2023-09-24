const fs = require('fs');
const path = require('path');
const http = require('http');

const app = require('./app')


const PORT = 5000;

const server = http.createServer(app);

server.listen(PORT, () =>
	console.log(`Server has been started on port ${PORT}`));





