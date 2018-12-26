var express = require('express');
var router = express.Router();
var Product = require('../model/productDetails');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getAllProducts', function(req, res, next) {
  Product.find({}, function(err,result){
    res.render('product', { result });
  });
});

module.exports = router;
