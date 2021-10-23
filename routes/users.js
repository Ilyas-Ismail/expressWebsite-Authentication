// File name: businessContacts.js
// Student Name: Muhammad Ilyas "Staz" Sameer Ismail
// Student ID: 301168447
// Date: 10/23/2021 (October 23rd, 2021)

var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

// connect to the model.

let businessContacts = require('../models/businessContacts');

/* GET users listing. */
router.get('/', function(req, res, next) {
    businessContacts.find(
        (err, businessContactsList) => {
            if(err){
                return console.error(err);
            }else{
                // console.log(businessContactsList);
                res.render('/businessContactsList', {
                    title: 'Business Contacts List',
                    businessContactsList: businessContactsList
                });
            }
        }
    );
});

module.exports = router;
