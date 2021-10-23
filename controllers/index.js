let express = require('express');
let router = express.Router();
let  mongoose = require('mongoose');
let passport = require('passport');

// render correct view

module.exports.home = (req, res, next) => {
    res.render('index', { title: 'Home' });
  }
  
  module.exports.about = (req, res, next) => {
    res.render('about', { title: 'About Me' });
  }

  module.exports.projects = (req, res, next) => {
    res.render('projects', { title: 'Projects' });
  }

  module.exports.services = (req, res, next) => {
    res.render('services', { title: 'Services' });
  }

  module.exports.contact = (req, res, next) => {
    res.render('contact', { title: 'Contact Me' });
  }

  module.exports.businessContacts = (req, res, next) => {
    res.render('businesscontacts', { title: 'Business Contacts' });
  }

  module.exports.displayLoginPage = (req, res, next) => {
    // check if the user is already logged in.
    if(!req.user)
    {
        res.render('login', 
        {
           title: "Login",
           messages: req.flash('loginMessage'),
           username: req.user ? req.user.username : '' 
        })
    }
    // send to businesscontacts if they are logged in.
    else
    {
        return res.redirect('/businessContacts');
    }
}

module.exports.processLoginPage = passport.authenticate('local', {
    successRedirect: '/businessContacts',
    failureRedirect: '/login'
});

module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}