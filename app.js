/* 
// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners
// Lesson 20 - The Node Package Manager
//-----------
// WHAT THIS APP DOES------
// This lesson is an introduction only.
// There is no app for this lesson.

/ REQUIRE THE CORE MODULES------
// a srvr requires nodejs's http core mod
const http = require('http');
// responding w html files requires nodejs's file system core mod
const fs = require('fs');

// CREATE THE SERVER------
// create & assign a srvr to a var for future use
// utilize HTTP's req & res objs
const server = http.createServer(function (req, res)
{
	// CON.LOG A TEST MSSG-------
	console.log('\nHey look, the client made this URL request: ' + req.url);
	// CHECK CLIENT REQ VIA ELSE-IF STATEMENT---------
	// if client reqs th home pg
	if (req.url === '/home' || req.url === '/')
	{
		res.writeHead(200,
		{
			'Content-Type': 'text/html'
		});
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	}
	// if client reqs th contact pg
	else if (req.url === '/contact')
	{
		res.writeHead(200,
		{
			'Content-Type': 'text/html'
		});
		fs.createReadStream(__dirname + '/contact.html').pipe(res);
	}
	// if client reqs some JSON data
	else if (req.url === '/api/ninjas')
	{
		var ninjas = [
		{
			name: 'ryu',
			age: 29
		},
		{
			name: 'yoshi',
			age: 32
		}];
		res.writeHead(200,
		{
			'Content-type': 'application/json'
		});
		res.end(JSON.stringify(ninjas));
	}
	// if client reqs none of the above
	else
	{
		res.writeHead(404,
		{
			'Content-type': 'text/html'
		});
		fs.createReadStream(__dirname + '/404.html').pipe(res);
	}
});

// LISTEN FOR THE PORT NUMBER------
server.listen(3000, '127.0.0.1');
// CON.LOG A TEST MSSG-------
console.log("\nThis app's server is now listening to port 3000, y'all!\n"); */