const mongoose = require('mongoose');

const collectionUsersSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: 5,
        maxlength: 20,
        required: true,
        unique: true
    },
    email: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true,
        unique: true
    },
    fullname: {
        type: String,
        minlength: 2,
        maxlength: 50,
        required: true
    },
    password: {
        type: String,
        minlength: 5,
        maxlength: 100,
        required: true
    }
});

const UserModel = mongoose.model('Users', collectionUsersSchema);

module.exports = UserModel;