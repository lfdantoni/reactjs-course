const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    devServer: {
        publicPath: '/dist/'
    },
    output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	}
};