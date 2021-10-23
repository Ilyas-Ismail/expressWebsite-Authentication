// File name: index.js
// Student Name: Muhammad Ilyas "Staz" Sameer Ismail
// Student ID: 301168447
// Date: 10/2/2021 (October 2nd, 2021)

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');


/* GET home page. */
router.get('/', indexController.home);

/* GET about page. */
router.get('/about', indexController.about);

/* GET projects page. */
router.get('/projects', indexController.projects);

/* GET services page. */
router.get('/services', indexController.services);

/* GET contact page. */
router.get('/contact', indexController.contact);

/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

/* GET business contacts page. */
router.get('/businessContactsList', indexController.businessContacts);

module.exports = router;
