trumpet = require('trumpet')
fs = require('fs')
through = require('through')
tr = trumpet()

Upperchange = function (buf){
	this.push(buf.toString().toUpperCase())
}

process.stdin.pipe(tr).pipe(process.stdout)

stream = tr.select('.loud').createStream()

stream.pipe(through(Upperchange)).pipe(stream)

/* Official Solution
var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet();
  
var loud = tr.select('.loud').createStream();
loud.pipe(through(function (buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
})).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);
*/