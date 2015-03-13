concat = require('concat-stream')
through = require('through')
bufferTxt = concat(buffering)

function buffering(buffer){
	process.stdout.write(buffer.toString().split('').reverse().join(''))
	process.stdout.write('\n')
}

process.stdin.pipe(bufferTxt)

/* Official Solution
var concat = require('concat-stream');
  
  process.stdin.pipe(concat(function (src) {
      var s = src.toString().split('').reverse().join('');
      console.log(s);
  }));
*/