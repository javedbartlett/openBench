const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const Menus = require('../database/index.js');

const app = express();
const Port = 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/../../dist'));
app.use(cors());

app.get('/api/menus/:restaurantID', (req, res) => {
  const id = parseInt(req.params.restaurantID);
  Menus.findOne({restaurantID: id}).lean()
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      console.log("Error getting the menus: ", err);
    })
})

app.post('/api/menus', (req, res) => {
  const body = req.body;
  Menus.create({
    restaurantID: body.id,
    restaurantName: body.name,
  })
    .then((doc) => {
      res.send(201);
    })
    .catch((err) => {
      console.log("Error writing to the database: ", err);
    })
})

app.put('/api/menus/:restaurantID', (req, res) => {
  const id = parseInt(req.params.restaurantID);
  const body = req.body;
  Menus.findOneAndUpdate({ restaurantID: id }, body)
    .then((doc) => {
      res.send(200);
    })
    .catch((err) => {
      console.log("Error updating record: ", err);
    })
})

app.delete('/api/menus/:restaurantID', (req, res) => {
  const id = parseInt(req.params.restaurantID);
  Menus.deleteOne({ restaurantID: id })
    .then(() => {
      res.send(200);
    })
    .catch((err) => {
      console.log("Error deleting record: ", err);
    })
})

app.listen(Port, () => {
  console.log(`listening on port ${Port}`);
});