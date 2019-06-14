var express = require('express');
var router = require('./routes/routes.js')
var path = require('path');
var app = express();

// for database mongo
var bodyParser = require('body-parser');
// for database mongo
var mongoose = require('mongoose');
var Expense = require('./models/Expense');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));

// for connecting to database mongo (https://mlab.com)
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
mongoose.connect('mongodb://admin:admin123@ds235417.mlab.com:35417/expenses');

app.use('/', router);
module.exports=app;