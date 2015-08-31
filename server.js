
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
	
	displayForm(res);
	
});

function displayForm(res) {
	fs.readFile('form.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}

server.listen(1185);
console.log("server listening on 1185");