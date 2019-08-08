var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', b: 2 , detail:{a:1,b:2}, arr:['aa','bb','cc'], s:'<strong>加粗</strong>'});
});

module.exports = router;
