let mongoose = require('mongoose');

let usersModel = mongoose.Schema(
    {
        username: String,
        password: String,
        email: String
    },
    {
        collection: "users"
    }
);

module.exports = mongoose.model('Users', usersModel);