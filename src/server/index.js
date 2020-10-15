const express = require('express');

const config = require('../../config');
const { dbMiddleware } = require('../middlewares');
const router = require('../routers');

const { serverHost: { host, port, protocol } } = config;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbMiddleware(app, config);
router(app);

app.listen(port, () => console.log(`Server running at ${protocol}://${host}:${port}`));

