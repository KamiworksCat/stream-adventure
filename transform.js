through = require('through2')
stream = through(write, end)

function write(buffer, encode, next){
	this.push(buffer.toString().toUpperCase())
	next()
}

function end(){
	this.push(null)
}

process.stdin.pipe(stream).pipe(process.stdout)

/* Official Solution
var through = require('through2');
  var tr = through(function (buf, _, next) {
      this.push(buf.toString().toUpperCase());
      next();
  });
  process.stdin.pipe(tr).pipe(process.stdout);
*/