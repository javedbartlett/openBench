const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const Image = require('../database/Image.js');

const port = process.env.PORT || 3004;

const app = express();

app.use(cors());
app.use(parser.json());
app.use(express.static('public'));
console.log('====================');

// CREATE
app.post('/restaurantid/', (req, res) => Image.createNew(req.body)
  .then(result => res.send(JSON.stringify(result)))
  .catch(() => res.end()));

// READ
app.get('/restaurantid/:id', (req, res) => Image.findById(req.params.id)
  .then(result => res.send(JSON.stringify(result)))
  .catch(() => res.end()));

// UPDATE
app.put('/restaurantid/:id', (req, res) => Image.updateById(req.params.id, req.body)
  .then(result => res.send(JSON.stringify(result)))
  .catch(() => res.end()));

// DELETE
app.delete('/restaurantid/:id', (req, res) => Image.deleteById(req.params.id)
  .then(result => res.send(JSON.stringify(result)))
  .catch(() => res.end()));

app.listen(port, () => {
  console.log('Port 3004 is listening');
});
