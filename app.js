const http = require('http');
const fs = require('fs');

const home = fs.readFileSync('home.html')
const sw = fs.readFileSync('sw.js')

const PORT=8080;

function handleRequest(req, res){
    console.log('request.url', req.url)
    if (req.url === '/') {
       res.end(home);
    } else if (req.url === '/page1') {
       res.end('Page 1');
    } else if (req.url === '/page2') {
       res.end('Page 2');
    } else if (req.url === '/sw.js') {
	   res.setHeader('content-type', 'text/javascript');
	   res.end(sw);
	} else {
       res.end('404');
    }
}

const server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});