var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'prod'),
    filename: 'bundle.js',
    publicPath: '/prod/'
  },
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      loader: 'babel',
	    exclude: /(node_modules|bower_components)/,
      include: path.join(__dirname, 'src')
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
