var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Line = mongoose.model('Line');

var app = express();

/* GET home page. */
router.get('/', (req, res, next) => {
	if (app.get('env') === 'development') {	
		res.render('index', { title: 'ETrap' });
	}
	if (app.get('env') === 'production') {
		res.render('indexProd', { title: 'Enhancer Trap Website' });
	}
})

router.get('/api/lines', (req, res, next) => {
	Line.find((err, lines) => {
		if (!!err) { return next(err) }
		
		res.json(lines)
	})
})

router.param('line', (req, res, next, id) => {
	let query = Line.where({ 'Line Number': id })

	query.exec((err, line) => {
		if (!!err) { return next(err) }
		if (!line) { return next(new Error('can\'t find line')) }

		req.line = line
		return next()
	});
})

router.get('/api/:line', (req, res) => {
	res.json(req.line);
});	


module.exports = router;


