const fs = require('fs');
const path = require('path');
const http = require('http');

const PORT = 5000;
const HOST_NAME = '127.0.0.1'; //localhost;

const server = http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;
	// console.log('Headers', req.headers)
	console.log('Url', url);
	console.log('Method', method);

	res.setHeader('Content-Type', 'text/html; charset=utf-8');
	switch (url) {
		case '/':
			console.log('Home page');
			res.write('<h1>Home page</h1>');
			res.end();
			break;
		case '/actors':
			console.log('Actors page');
			res.write('<h1>Actors page</h1>');
			res.end();
			break;
		default:
			console.log('Page not found');
			res.statusCode = 404;
			res.write('<h1>404</h1>');
			res.end();
	}
});

server.listen(PORT, HOST_NAME, () =>
	console.log(`Server has been started on port ${PORT}`)
);
