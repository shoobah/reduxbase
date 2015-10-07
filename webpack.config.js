var webpack = require('webpack')
var path = require('path')

const penv = process.env.NODE_ENV.trim() + '.js'

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client',
      path.join(__dirname, 'src/index')
    ]
  },
  output: {
    path: path.join(__dirname, 'dev'),
    filename: 'bundle.js',
    publicPath: '/dev/',
    pathInfo: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
        exclude: path.join(__dirname, 'node_modules')
      }, {
        test: /\.(scss|sass)$/,
        loader: 'style!css!sass'
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?name=images/[name].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      config: path.join(__dirname,'src/config', penv)
    }
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
}
