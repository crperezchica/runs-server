const { Router } = require('express');
const Random = require('../models/Random');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { text } = req.body;
    Random 
      .create({ text })
      .then(random => res.json(random))
      .catch(next);
  });

