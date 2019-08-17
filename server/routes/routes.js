var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Expense = require('../../models/Expense');

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
 
 router.route('/insert')
 .post(function(req,res) {
  var expense = new Expense();
   expense.description = req.body.desc;
   expense.amount = req.body.amount;
   expense.month = req.body.month;
   expense.year = req.body.year;
 expense.save(function(err) {
       if (err)
         res.send(err);
       res.send('Expense successfully added!');
   });
 })

module.exports = router;