const mongoose = require('mongoose');
const db = require('./menu.js');

mongoose.Promise = global.Promise;

const restaurantSchema = new mongoose.Schema({
  restaurantID: Number,
  restaurantName: String,
  menuNames: [ String ],
  menus: [{
    menuID: Number,
    menuName: String,
    categories: [ String ],
    items: [{
      itemID: String,
      category: String,
      itemName: String,
      description: String,
      price: String
    }]
  }]
})

const Menus = mongoose.model('Menus', restaurantSchema);

module.exports = Menus;