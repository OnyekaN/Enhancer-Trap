const mongoose = require('mongoose')

//mongoose.connect('mongodb://localhost/enhancertrap')

const LineSchema = new mongoose.Schema({
	_id: Number,
	"Line Number": String,
	TIF: String,
	JPEG: String,
	Annotations: [String]
})
	
mongoose.model('Line', LineSchema, 'dataset')

