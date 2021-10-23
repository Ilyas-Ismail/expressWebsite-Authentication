// File name: businessContacts.js
// Student Name: Muhammad Ilyas "Staz" Sameer Ismail
// Student ID: 301168447
// Date: 10/23/2021 (October 23rd, 2021)

var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let businessContactsController = require('../controllers/businessContacts');

function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET business contacts listing. */
router.get('/', requireAuth, businessContactsController.list);

// Edit business contact listing.
router.get('/edit/:id', requireAuth, businessContactsController.edit);
router.post('/edit/:id', requireAuth, businessContactsController.processEdit);

router.get('/delete/:id', requireAuth, businessContactsController.delete);

module.exports = router;
