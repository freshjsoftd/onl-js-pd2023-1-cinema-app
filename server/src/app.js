const express = require('express');


const app = express();

app.get('/', (req, res) => {
	fs.readFile('./public/index.html', 'utf-8', (err, data) => {
		if (err) {
			res.statusCode = 404;
			throw err;
		}
		res.setHeader('Content-Type', 'text/html; charset=utf-8');
		res.write(data);
		res.end();
	});
});
app.get('/contact', (req, res) => {
	fs.readFile('./public/contact.html', 'utf-8', (err, data) => {
		if (err) {
			res.statusCode = 404;
			throw err;
		}
		res.setHeader('Content-Type', 'text/html; charset=utf-8');
		res.write(data);
		res.end();
	});
});
app.get('/images/*', (req, res) => {
	const url = req.url;
	fs.readFile(`./public${url}`, (err, data) => {
		if (err) {
			res.statusCode = 404;
			throw err;
		}
		res.setHeader('Content-Type', 'image/jpeg');
		res.write(data);
		res.end();
	});
});