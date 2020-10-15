const database = require('../database/connect');
const { DbConnector } = require('../connectors');
const { UserModel } = require('../models');

const dbMiddleware = (app, config) => {
    database(config);
    app.use(async (req, res, next) => {
        res.locals.UserDbConnector = new DbConnector({ collection: UserModel });
        next();
    });
}

module.exports = dbMiddleware;