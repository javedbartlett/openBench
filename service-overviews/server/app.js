const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const overviewDAO = require('./db/overviewDAO.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// READ
app.get('/api/restaurant/:restaurantId', (req, res) => {
  let id = req.params.restaurantId;
  console.log('id = ', id);
  overviewDAO.fetchById(id)
    .then(overview => {
      res.json(overview);
    },
    () => res.status(500).send('Internal error!'));
});

// UPDATE
app.put('/api/restaurant/:restaurantId', (req, res) => {
  let id = req.params.restaurantId;
  overviewDAO.updateById(id, req.body)
    .then(overview => {
      res.json(overview);
    },
    () => res.status(500).send('Internal error!'));
});

// CREATE
app.post('/api/restaurant/', (req, res) => {
  overviewDAO.createNew(req.body)
    .then(overview => {
      res.json(overview);
    },
    () => res.status(500).send('Internal error!'));
});

// DELETE
app.delete('/api/restaurant/:restaurantId', (req, res) => {
  let id = req.params.restaurantId;
  overviewDAO.deleteById(id)
    .then(overview => {
      res.json(overview);
    },
    () => res.status(500).send('Internal error!'));
});


module.exports = app;
