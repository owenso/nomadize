var path = require('path');
var webpack = require('webpack');
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

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
      loaders: ['babel', 'webpack-module-hot-accept'],
      // query: {
      //   presets: ['es2015', 'react', 'webpack-module-hot-accept']
      // }
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
