// File name: users.js
// Student Name: Muhammad Ilyas "Staz" Sameer Ismail
// Student ID: 301168447
// Date: 10/2/2021 (October 2nd, 2021)

// Will be used for Assignment 2.

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
