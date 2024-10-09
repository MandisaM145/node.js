
/*const http = require('http');
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World');
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server Running...');
});*/


// this builds the objects for us to access some things on this package//
//const uuid = require('uuid');

//this desctructures the object so we can grab something inside it//
const {v4: uuidv4} = require('uuid');
console.log(uuidv4());

