var webpack = require('webpack')
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var PROD = (process.env.NODE_ENV === 'production');

module.exports = {
	context: __dirname,
	entry: [
		'./app/app.js',
	],
	output: {
			path: path.join(__dirname, 'app/assets/js'),
			filename: PROD ? 'main.min.js' : 'main.js'
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
	},
	plugins: [
		new CopyWebpackPlugin([
			{ context: 'app/common',
				from: '**/*.html',
				to: path.join(__dirname, 'app/assets/views')	}
		],
			{ copyUnmodified: false }
		),
		PROD && new webpack.optimize.UglifyJsPlugin({
							compress: { warnings: false }	
		}) 
	].filter(Boolean),

};
