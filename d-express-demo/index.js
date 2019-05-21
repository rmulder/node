const config = require('config');
const debug = require('debug')('app:startup');
const morgan = require('morgan');
const helmet = require('helmet');
// const Joi = require('joi');
const logger = require('./middleware/logger');
const auth = require('./middleware/authentication');
const courses = require('./routes/courses');
const home = require('./routes/home');

const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views'); // default

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(helmet());
app.use(express.static('public'));

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  debug('Morgan enabled...');
}
app.use(logger);
app.use(auth);

app.use('/api/courses', courses);
app.use('/', home);


//Configuration
console.log(`Application Name: ${config.get('name')}`);
console.log(`Mail Server: ${config.get('mail.host')}`);
console.log(`Mail Password: ${config.get('mail.password')}`);

//PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));