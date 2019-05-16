const path = require('path');
const os = require('os');
const fs = require('fs');

// const files = fs.readdirSync('./');
fs.readdir('./', function (err, files) {
    if (err) console.log('Error', err);
    else console.log('Result', files);

});

// console.log(files);