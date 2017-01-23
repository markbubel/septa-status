var express = require('express');
var router = express.Router();
var pageTitle = 'SEPTA Service Status';

router.get('/', function(req, res, next) {
  res.render('index', { title: pageTitle });
});

router.get('/buses', function(req, res, next) {
  res.render('buses', { title: pageTitle });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: pageTitle });
});

module.exports = router;
