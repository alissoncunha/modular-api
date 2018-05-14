const winston = require('winston');
const modules = require('../modules');

const API_PREFIX = '';

exports.register = (app) => {
    winston.info('initializing routers...');
    registerRouters(app);
}

function registerRouters(app) {
    modules.forEach((module) => {
        winston.info(`api - registering router: ${module.name}`);
        app.use(API_PREFIX, module.router);
    });
}