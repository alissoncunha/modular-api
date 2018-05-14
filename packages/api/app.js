const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const handlers = require('./core/handlers');
const modules = require('./core/modules');

const db = require('database');
console.log(db);

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

handlers.register(app);
modules.register(app);

module.exports = app;