// return memory usage of the Node process in bytes
var util = require('util');
console.log(util.inspect(process.memoryUsage()));