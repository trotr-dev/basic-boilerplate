const express = require('express');

const config = require('../../config');
const database = require('../database/connect');
const router = require('../routers');

const { serverHost: { host, port, protocol } } = config;

const app = express();
database(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
router(app);

app.listen(port, () => console.log(`Server running at ${protocol}://${host}:${port}`));

