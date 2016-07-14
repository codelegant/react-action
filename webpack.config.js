var path = require('path');
var webpack = require('webpack');
var process = require('process');
var PROD = JSON.parse(process.env.PROD_ENV || 0);
module.exports = {
  entry: {
    'product_entry':'./public/src/product.js'
  },
  output: {
    path: path.join(__dirname + '/public/dist/'),
    filename: PROD ? '[name].min.js' : '[name].js'//[name].js
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ["react", "es2015", "stage-0"]
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  plugins: PROD ? [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')// production | true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false}
    })
  ] : []
};