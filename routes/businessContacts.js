// File name: businessContacts.js
// Student Name: Muhammad Ilyas "Staz" Sameer Ismail
// Student ID: 301168447
// Date: 10/23/2021 (October 23rd, 2021)

var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let businessContactsController = require('../controllers/businessContacts');

/* GET business contacts listing. */
router.get('/', businessContactsController.list);

// Edit business contact listing.
router.get('/edit/:id', businessContactsController.edit);
router.post('/edit/:id', businessContactsController.processEdit);

router.get('/delete/:id', businessContactsController.delete);

module.exports = router;
