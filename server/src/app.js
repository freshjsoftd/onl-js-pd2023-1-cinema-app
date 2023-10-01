const fs = require('fs');
const path = require('path');

const express = require('express');


const router = require('./routers')
// const actorRouters = require('./routers/actorRouters');
// const directorRouters = require('./routers/directorRouters');
// const actorControllers = require('./controllers/actorController');
// const directorControllers = require('./controllers/directorController');
const { getTime, showTime } = require('./middleware/timeMiddleware')

const app = express();

app.use(express.json());

// Get-Show time
/* app.use(getTime);
app.use(showTime); */
app.use('/time', getTime, showTime);

// app.use(express.static('./public'));
// app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.static(path.resolve('public')));

//Routers
app.use('/api', router);
// app.use('/', directorRouters);

// Process
console.log(process.env.PORT)

// Downloading
app.get('/download', (req, res) => {
	console.log('download');
	res.download(path.resolve('like.txt'))
})

// Redirect
app.get('/phones', (req, res) => {
	res.redirect('/contact');
})

// Send query params
// address /codes?id=100&code=WWW
app.get('/codes', (req, res) => {
	console.log(req.query)
	const id = req.query.id;
	const code = req.query.code;
	console.log(`Id: ${id}, Code: ${code}`);
	console.log(`Code is Array:  ${Array.isArray(code)}`);
	console.log(res.headersSent);
	res.send(`Id: ${id}, Code: ${code}`);
	console.log(res.headersSent);

})

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

// getAllActors
// app.get('/actors', actorControllers.getActors);
// // getActorById
// app.get('/actors/:actorId', actorControllers.getActorById);
// // createActor
// app.post('/actors', actorControllers.createActor);
// updateActor
// app.put('/actors', actorControllers.updateActor);
// deleteActor
// app.delete('/actors/:actorId', actorControllers.deleteActor);


// Directors
// getAllDirectors
// app.get('/directors', directorControllers.getDirectors);
// // getDirectorById
// app.get('/directors/:directorId', directorControllers.getDirectorById);
// // createDirector
// app.post('/directors', directorControllers.createDirector);
// // updateDirector
// app.put('/directors', directorControllers.updateDirector);
// // deleteDirector
// app.delete('/directors/:directorId', directorControllers.deleteDirector);


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