var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Line = mongoose.model('Line');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'ETrap' });
});

router.get('/api/lines', (req, res, next) => {
	Line.find((err, lines) => {
		if (err) {return next(err);}
		
		res.json(lines);
	})
});

module.exports = router;

