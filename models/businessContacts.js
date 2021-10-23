// File name: businessContacts.js
// Student Name: Muhammad Ilyas "Staz" Sameer Ismail
// Student ID: 301168447
// Date: 10/23/2021 (October 23rd, 2021)

let mongoose = require('mongoose');

let businessContactsModel = mongoose.Schema(
    {
        name: String,
        pNumber: String,
        email: String
    },
    {
        collection: "contacts"
    }
);

module.exports = mongoose.model('Contacts', businessContactsModel);