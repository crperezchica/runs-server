const express = require('express');
const app = express();
const connection = require('./middleware/connection');
const { handler } = require('./middleware/error');
const random = require('./routes/random');

app.use(express.json());

app.use('/random', connection, random);

app.use(handler);

module.export = app;
