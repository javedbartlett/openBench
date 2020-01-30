const seedScript = require('../src/database/seed.js');

describe('Seed script', () => {
  it('Should generate a restaurant object', () => {
    const obj = seedScript.generateRestaurants(1);
    expect(typeof(obj[0])).toBe("object");
  });

  it('Should contain a property called "restaurantID"', () => {
    const obj = seedScript.generateRestaurants(1);
    expect(obj[0].hasOwnProperty('restaurantID')).toBe(true);
  });

  it('Should contain between 1 and 3 menus', () => {
    const obj = seedScript.generateRestaurants(1);
    expect(obj[0].menuNames.length >= 1).toBe(true);
    expect(obj[0].menuNames.length <= 3).toBe(true);
  });

});