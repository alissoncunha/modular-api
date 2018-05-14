const winston = require('winston');

function registerErrorHandler(app) {
    app.use((err, req, res, next) => {
        res.status(err.status || 500)
            .send(err.message);
    });
}

exports.register = (app) => {
    registerErrorHandler(app);
    winston.info('api - default error handler registered!');
};