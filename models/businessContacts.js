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