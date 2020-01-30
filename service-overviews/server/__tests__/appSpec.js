const mongoose = require('mongoose');
const request = require('supertest');

const app = require('../app.js');

describe('Test api/restaurant/<restaurantId>', () => {
  test('It should response the GET method', () => {
    request(app).get('/api/restaurant/1').then((response) => {
      expect(response.statusCode).toBe(200);
    });
  });
});

module.exports = {
  mongoose,
  connect: () => {
    mongoose.Promise = Promise;
    mongoose.connect('mongodb://127.0.0.1/overview', {useNewUrlParser: true, useUnifiedTopology: true});
  },
  disconnect: (done) => {
    mongoose.disconnect(done);
  },
};