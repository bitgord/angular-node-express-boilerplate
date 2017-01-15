var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

router.get('/calc', function(req, res){
  res.render('calc', {
    title: 'Calc'
  });
});

router.get('/cases', function(req, res){
  res.render('cases', {
    title: 'Cases'
  });
});

module.exports = router;