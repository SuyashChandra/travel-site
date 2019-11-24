const path = require('path');

const postCSSPlugins = [
	require('postcss-import'),
	require('autoprefixer'),
	require('postcss-simple-vars'),
	require('postcss-nested')
];

module.exports = {
	entry: './app/assets/scripts/App.js',
	output: {
		filename: 'bundled.js',
		path: path.resolve(__dirname, 'app')
	},
	devServer: {
		before: function(app, server) {
			server._watch('./app/**/*.html');
		},
		contentBase: path.join(__dirname, 'app'),
		hot: true,
		port: 8080,
		host: '0.0.0.0'
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					'style-loader',
					'css-loader',
					{ loader: 'postcss-loader', options: { plugins: postCSSPlugins } }
				]
			}
		]
	}
};
