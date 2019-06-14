var express = require('express');
var bodyParser = require('body-parser');
var Expense = require('../../models/Expense');

var router = express.Router();

router.get('/', function(req, res){
  res.render('index')
});



module.exports = router;