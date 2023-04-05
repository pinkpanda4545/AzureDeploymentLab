var express = require('express');
var router = express.Router();

/* GET home page. */
//Trying to fix the Azure update
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Deployment Lab' });
});

module.exports = router;
