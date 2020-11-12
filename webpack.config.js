const path = require('path');

module.exports = {
  entry: './src/front/index.js',
  output: {
    path: path.resolve('src/static/'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
