const random = require('../lib/models/random');
const chance = require('chance').Chance();

function seedData() {
  const randomToCreate = [...Array(100)].map(() => ({
    text: chance.sentence()
  }));

  return random.create(randomToCreate);
}

module.exports = seedData;
