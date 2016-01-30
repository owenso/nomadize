var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['webpack-hot-middleware/client','./src/index.js'],
  output: {
    path: path.join( __dirname, 'public', 'js', 'build'),
    publicPath: '/js/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['bower_components','node_modules']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
]
};
