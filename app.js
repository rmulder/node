const path = require('path');
const os = require('os');

const log = require('./logger');

var pathObj = path.parse(__filename);

var totalMemory = os.totalmem();
var freeMemory = os.freemem();


//Template string
//ES6
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);