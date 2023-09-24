const fs = require('fs');
const path = require('path');
const http = require('http');




const PORT = 5000;



const server = http.createServer(app);

server.listen(PORT, () =>
	console.log(`Server has been started on port ${PORT}`));





/* const server = http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;
	// console.log('Headers', req.headers)
	console.log('Url', url);
	console.log('Method', method);

	// res.setHeader('Content-Type', 'text/html; charset=utf-8');
	switch (url) {
		case '/':
			console.log('Home page');
			const homeData = fs.readFileSync('./public/index.html', 'utf8');
			res.write(homeData);
			res.end();
			break;
		case '/contact':
			const contactData = fs.readFileSync('./public/contact.html', 'utf8');
			res.write(contactData);
			res.end();
			break;
		case '/actors':
			console.log('Actors page');
			res.write('<h1>Actors page</h1>');
			res.end();
			break;
		default:
			if(url.includes('/images')){
				console.log('It is image');
				console.log(url);
				res.setHeader('Content-Type', 'image/jpeg');
				fs.readFile(`public${url}`, 
				(err, data) => {
					if(err){
						res.statusCode = 404;
						throw err;
					}else{
						
					res.write(data);
					res.end();
					}
					
				})

			}else{
				console.log('Page not found');
			res.statusCode = 404;
			res.write('<h1>404</h1>');
			res.end();
			}
	}
	res.end();
}); */
