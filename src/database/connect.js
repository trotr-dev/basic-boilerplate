const mongoose = require('mongoose');

const connect = (app) => {
    mongoose.connect('mongodb://localhost:27017/trotrBoilerplate', {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log('Database Connected'))
        .catch(err => console.log(err.message));

    app.locals.database = mongoose;
}

module.exports = connect;