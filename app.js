//var welcometext = require('./welcometext');
//var express = require('express');
//var path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');

//var routes = require('./routes/index');
//var users = require('./routes/users');

//var app = express();
//var welcometextstring = welcometext();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

//app.use(logger('dev'));

//app.use(function (req, res, next) {
  //next();
//});

//app.use(function (req, res, next) {
  //res.send('ending the middleware callback chain');
//});


//app.get('/home', function (req, res) {
 //res.render('index', { title: 'Express' });
//});



//module.exports = app;


var express = require('express');
var app = express();
 
app.listen(3000);

app.get('/trial', function(request, response) {
    response.send("Hello World");
});

