const path = require('path');

var pathObj = path.parse(__filename);
const log = require('./logger');

log(pathObj);