const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  // watch: true, -> set webpack in mode 'watch' changes
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};