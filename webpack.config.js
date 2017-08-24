const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  devServer:{
    contentBase: './dist'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}