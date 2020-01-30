const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/oc-imageCarousel');

module.exports = db;
