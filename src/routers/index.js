const home = require('./home');
const users = require('./users');

const routers = [
    ...home,
    ...users
];

module.exports = (app) => {
    app.use(routers);
};
