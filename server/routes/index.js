var express = require('express');
var router = express.Router();

var excusesList = [
  "Pas le temps.",
  "Mauvaise connexion.",
  "Trop compliqué."
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/list', function(req, res, next) {
  return res.status(200).json(excusesList)
});

router.post('/api/new', function(req, res, next) {
  if( excusesList.findIndex((value) => value == req.body.newExcuse) == -1) {
    excusesList.push(req.body.newExcuse)
  }
  return res.status(200).json({newElement: excusesList.lastItem})
})

module.exports = router;
