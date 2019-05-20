const Joi = require('joi');
const express = require('express');
const app = express();

const genres = [{
    id: 1,
    name: "Horror"
  },
  {
    id: 2,
    name: "Drama"
  },
  {
    id: 3,
    name: "Sci-Fi"
  }
];

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.get('/api/genres', (req, res) => {
  res.send(genres);
});

app.get('/api/genres/:id', (req, res) => {
  const genre = genres.find(g => g.id === parseInt(req.params.id));
  if (!genre) return res.status(404).send('The genre with given ID was not found.');
  res.send(genre);
});

app.update('/api/genres', (req, res) => {
  const schema = {
    name: Joi.string().min(3).required()
  };

  const result = Joi.validate(schema);
  if (result.error) return res.status(400).send(result.error.details[0].message);

  const id = genres.length + 1;

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));