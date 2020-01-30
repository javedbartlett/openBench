const mongoose = require('mongoose');
// const db = require('./index.js');
mongoose.Promise = global.Promise;

const imageSchema = new mongoose.Schema({
  restaurantId: Number,
  photoId: Number,
  photoTitle: String,
  photoDate: String,
  src: String,
  width: Number,
  height: Number,
  photoDescription: String,
});

const Image = mongoose.model('Image', imageSchema);

const findById = restaurantId => Image.find({ restaurantId }).exec();
const createNew = info => Image.create(info);
const updateById = (id, body) => Image.findByIdAndUpdate(id, body);
const deleteById = id => Image.findByIdAndRemove(id);

module.exports = Image;
module.exports.findById = findById;
module.exports.createNew = createNew;
module.exports.updateById = updateById;
module.exports.deleteById = deleteById;
