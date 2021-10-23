let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

// creating a blueprint for users.

let userModel = mongoose.Schema(
    {
        username: String,
        password: String,
        email: String
    },
    {
        collection: "users"
    }
);

module.exports.userModel = mongoose.model('Users', userModel);