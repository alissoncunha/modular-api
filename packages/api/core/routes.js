const winston = require('winston');
const routes = require('../routes');

const API_PREFIX = '/api';

function registerRouters(app) {
    routes.forEach((route) => app.use(API_PREFIX, route));
}

exports.register = (app) => {
    winston.info('initializing routers...');
    registerRouters(app);
}