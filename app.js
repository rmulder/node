const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

//Register a listener
logger.on('messageLogged', (arg) => { //e, eventArg
    console.log('Listener called', arg);

});


logger.log('message');