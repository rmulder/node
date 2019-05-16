const path = require('path');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');

const emitter = new EventEmitter();


//Register a listener
emitter.on('messageLogged', (arg) => { //e, eventArg
    console.log('Listener called', arg);

});

emitter.on('loggerEvent', (arg) => {
    console.log('logging event listener called', arg);
});

//Raise a logger event
emitter.emit('loggerEvent', {
    data: 'message'
});

//Raise an event
emitter.emit('messageLogged', {
    id: 1,
    url: 'http://'
});