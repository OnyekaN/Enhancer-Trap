var path = require('path');

module.exports = {
	entry: './app/app.js',
	output: {
			path: path.join(__dirname, 'app/assets/js'),
			filename: 'bundle.js'
	},
	module: {
		loaders: [
			{	
				test: path.join(__dirname, 'app'),
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				}
			}
		]
	}
};
