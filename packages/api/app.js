const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const handlers = require('./core/handlers');
const routes = require('./core/routes');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

handlers.register(app);
routes.register(app);

module.exports = app;