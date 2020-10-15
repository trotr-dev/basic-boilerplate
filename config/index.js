require('dotenv').config();

const config = {
    serverHost: {
        host: process.env.HOST,
        port: process.env.PORT,
        protocol: process.env.PROTOCOL,
        env: process.env.NODE_ENV == 'production' ? 'production' : process.env.NODE_ENV
    },

    dbHost: process.env.URI_STRING
};

module.exports = config;