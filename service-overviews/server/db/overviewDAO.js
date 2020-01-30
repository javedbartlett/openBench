const Overview = require('../models/restaurant-overview.js');

let fetchById = (id) => {
  let query = Overview.findOne({ id: id });
  return query.exec();
};

module.exports.fetchById = fetchById;