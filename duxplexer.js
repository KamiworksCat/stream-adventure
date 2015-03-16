spawn = require('child_process').spawn
duplex = require('duplexer')

module.exports = function (cmd, args){
	pro = spawn(cmd, args)
	return duplex(pro.stdin, pro.stdout)
}