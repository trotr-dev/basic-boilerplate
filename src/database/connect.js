const mongoose = require('mongoose');

const connect = (config) => {
    mongoose.connect(config.dbHost, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('Database Connected'))
        .catch(err => console.log(err.message));

    return mongoose;
}

module.exports = connect;