/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/15 16:40
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var pkg=require('./package.json');
module.exports = {
  entry    : {
    'product': './public/src/product',
    // 'demo'         : './public/src/demo',
    // 'animation': './public/src/animation',
    // 'fetch': './public/src/fetch/fetch',
    // 'es5': './public/src/es5',
  },
  output   : {
    path         : path.join(__dirname + '/dist/'),
    filename     : '[name].min.js',//[name].js
    libraryTarget: "var"
  },
  module   : {
    loaders: [
      {
        test   : /\.js?$/,
        loader : 'babel',// short for babel-loader
        exclude: /node_modules/,
        query  : {
          presets: ['react', 'es2015', 'stage-0']
        }

      },
      {
        test  : /\.css$/,
        loader: 'style!css'// right-to-left and the loader are separated by '!'. Short for style-loader!css-loader
      }
    ],
  },
  target   : "web",
  externals: {
    'react'    : 'React',
    'react-dom': 'ReactDOM',
    // "react-router": "ReactRouter",
    // 'history': "History",
    // 'redux': 'Redux',
    // 'react-redux': 'ReactRedux'
  },
  plugins  : [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')// production | true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false}
    }),
    new HtmlWebpackPlugin({
      title      : 'Html Webpack Plugin',
      template   : './view/init.html',
      keywords   : 'htmlwebpackplugin',
      description: 'this is a webpack plugin',
      inject     : 'body',
      filename   : '../view/index.html',
      minify     : {
        htmls         : true,
        minifyCSS     : true,
        minifyJS      : true,
        collapseWhitespace:true
      },
      hash       : true
    })
  ],

};