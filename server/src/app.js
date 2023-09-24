const fs = require('fs');
const path = require('path');

const express = require('express');

const actorControllers = require('./controllers/actorController');

const app = express();

// app.use(express.static('./public'));
// app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.static(path.resolve('public')));

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
// Actors
// getAllActors
app.get('/actors', actorControllers.getActors);

app.get('/actors/:actorId', actorControllers.getActorById);
app.post('/actors/', ()=>{})
app.put('/actors/id', ()=>{})
app.delete('/actors/id', ()=>{})
// getActorById
// createActor
// updateActor
// deleteActor
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
/* app.get('/images/*', (req, res) => {
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
}); */


module.exports = app;