// File name: app.js
// Student Name: Muhammad Ilyas "Staz" Sameer Ismail
// Student ID: 301168447
// Date: 10/2/2021 (October 2nd, 2021)

// importing the modules.
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// associating varibles to route the other js files.
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { builtinModules } = require('module');

var app = express();

// view engine setup, configuring the express application.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'Scripts')));

// getting routing information.
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler.
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler.
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page.
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
