const db = require('./index.js');
const Overview = require('../models/restaurant-overview.js');
const faker = require('faker');
const categories = require('./categories.json');
const NUM_OF_SAMPLES = 100;
const NUM_OF_TAGS = 3;

let sampleOverviews = [];

for (let i = 0; i < NUM_OF_SAMPLES; i++) {
  let tags = [];
  for (let j = 0; j < NUM_OF_TAGS; j++) {
    tags.push(faker.commerce.productAdjective());
  }

  let review = Math.round(((Math.random() * 2) + 3) * 10) / 10;
  let reviewStars = [];
  for (let k = 0; k < review - 1; k++) {
    reviewStars.push(1);
  }

  if (Number.isInteger(review)) {
    reviewStars.push(1);
  } else if ((review - Math.floor(review)) >= 0.5) {
    reviewStars.push(0);
  }

  // if ((review - Math.floor(review)) >= 0.5) {
  //   reviewStars.push(0);
  // } else if (review === Math.floor(review)) {
  //   reviewStars.push(1);
  // }

  let overview = new Overview({
    id: i + 1,
    title: faker.company.companyName(),
    review: review,
    reviewStars: reviewStars,
    numOfReviews: Math.floor(Math.random() * 10000),
    pricePerPersonLow: Math.floor(Math.random() * 50),
    pricePerPersonHigh: 50 + Math.floor(Math.random() * 50),
    category: categories[Math.floor(Math.random() * categories.length)],
    topTags: tags,
    description: faker.lorem.paragraphs()
  });
  sampleOverviews.push(overview);
}

const insertSampleOverviews = () => {
  Overview.create(sampleOverviews)
    .then(() => db.disconnect());
};

insertSampleOverviews();