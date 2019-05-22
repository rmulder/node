const genres = require('./routes/genres');
const home = require('./routes/home');
const express = require('express');
const app = express();
app.use(express.json());

app.use('/', home);
app.use('/api/genres', genres);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));