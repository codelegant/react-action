/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/15 16:40
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// var pkg=require('./package.json');
module.exports = {
  entry: {
    // 'app': './public/src/router/App'
    'product': './public/src/product',
    // 'demo'         : './public/src/demo',
    // 'animation': './public/src/animation',
    // 'fetch': './public/src/fetch/fetch',
    // 'es5': './public/src/es5',
  },
  output: {
    path: path.join(__dirname + '/dist/'),
    filename: '[name].min.js?[hash:8]',//[name].js
    libraryTarget: "var",
    chunkFilename: '[name].min.js?[chunkhash:8]',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel',
        exclude: /node_modules/,

      },
      {
        test: /\.css$/,
        use: ['style', 'css'],
      }
    ],
  },
  resolveLoader: {
    moduleExtensions: ["-loader"],
  },
  target: 'web',
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    // "react-router": "ReactRouter",
    // 'history': "History",
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')// production | true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false }
    }),
    new HtmlWebpackPlugin({
      title: 'Html Webpack Plugin',
      template: './view/pub.init.html',
      keywords: 'htmlwebpackplugin',
      description: 'this is a webpack plugin',
      inject: 'body',
      filename: '../view/app.html',
      minify: {
        minifyCSS: true,
        minifyJS: true,
        collapseWhitespace: true,
        sortAttributes: true,
        sortClassName: true
      },
      xhtml: true,
      hash: false
    })
  ],

};