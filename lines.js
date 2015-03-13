split = require('split')
through = require('through')

alt = function (oddnum, evennum){
	f = evennum
	return function (buffer){
		f = (f === evennum) ? oddnum : evennum
		f.call(this, buffer)
	}
}

switchBoard = function (stringnum){
	return function (buffer){
		value = stringnum.call(buffer.toString()) + '\n'
		this.queue(value)
	}
}

process.stdin
	.pipe(split())
	.pipe(through(alt(
		switchBoard(String.prototype.toLowerCase),
		switchBoard(String.prototype.toUpperCase))))
	.pipe(process.stdout)

/* Official Solution
var through = require('through2');
var split = require('split');

var lineCount = 0;
var tr = through(function (buf, _, next) {
    var line = buf.toString();
    this.push(lineCount % 2 === 0
        ? line.toLowerCase() + '\n'
        : line.toUpperCase() + '\n'
    );
    lineCount ++;
    next();
});
process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout)
;
*/