duplex = require('duplexer')
through = require('through')

module.exports = function(counter){
	count = {}
	input = through(write, end)
	return duplex(input, counter)

	function write(row){
		count[row.country] = (count[row.country] || 0) + 1
	}

	function end(){
		counter.setCounts(count)
	}
}