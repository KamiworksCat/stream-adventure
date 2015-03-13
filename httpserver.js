http = require('http')
fs = require('fs')
through = require('through')
port = process.argv[2]

transform = function(buf){
	this.push(buf.toString().toUpperCase())
}

server = http.createServer(SocketRequest)

function SocketRequest(req, res){
	if (req.method === 'POST'){
		req
		.pipe(through(transform))
		.pipe(res)
	}
}

server.listen(port)

/* Official Solution
var http = require('http');
  var through = require('through2');
  
  var server = http.createServer(function (req, res) {
      if (req.method === 'POST') {
          req.pipe(through(function (buf, _, next) {
              this.push(buf.toString().toUpperCase());
              next();
          })).pipe(res);
      }
      else res.end('send me a POST\n');
  });
  server.listen(parseInt(process.argv[2]));
*/