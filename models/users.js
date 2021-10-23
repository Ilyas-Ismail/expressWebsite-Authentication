// File name: index.js
// Student Name: Muhammad Ilyas "Staz" Sameer Ismail
// Student ID: 301168447
// Date: 10/23/2021 (October 23rd, 2021)

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