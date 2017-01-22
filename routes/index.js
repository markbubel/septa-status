var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SEPTA Service Status' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'SEPTA Service Status' });
});

module.exports = router;
