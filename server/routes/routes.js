var express = require('express');
var bodyParser = require('body-parser');
var Expense = require('../../models/Expense');

var router = express.Router();

router.get('/', function(req, res){
  res.render('index')
});


router.get('/getAll',function(req, res) {
  var monthRec = req.query.month;
  var yearRec = req.query.year;
  if(monthRec && monthRec !== 'All'){
   Expense.find({$and: [ {month: monthRec}, {year: yearRec}]}, function(err, expenses) {
    if (err)
     res.send(err);
    res.json(expenses);
   });
  } else {
   Expense.find({year: yearRec}, function(err, expenses) {
    if (err)
     res.send(err);
    res.json(expenses);
   });
  }
 });


module.exports = router;