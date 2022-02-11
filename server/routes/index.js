var express = require('express');
var router = express.Router();

var excusesList = [
  "a",
  "b",
  "c"
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/list', function(req, res, next) {
  res.status(200).json({data: excusesList})
});

module.exports = router;
