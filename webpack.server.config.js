/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/9/1 10:58
 */
require('babel-register');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const LinkButton = require('./public/src/server-render/LinkButton');
const state = {liked: false};
const linkButton = React.createFactory(LinkButton);//工厂方法，将类转换为函数(React Element)
const reactString = ReactDOMServer.renderToStaticMarkup(linkButton(state));//渲染成字符串
console.log(JSON.stringify(state));
// var pkg=require('./package.json');
module.exports = {
  entry    : {
    'bundle': './public/src/server-render/browser'
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
        exclude: /node_modules/

      },
      {
        test  : /\.css$/,
        loader: 'style!css'// right-to-left and the loader are separated by '!'. Short for style-loader!css-loader
      }
    ],
  },
  target   : 'web',
  externals: {
    'react'    : 'React',
    'react-dom': 'ReactDOM',
  },
  plugins  : [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')// production | true
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      output  : {comments: false}
    }),
    new HtmlWebpackPlugin({
      title       : '预生成静态文件',
      template    : './view/server.init.html',
      initialState: JSON.stringify(state),
      body        : reactString,
      keywords    : 'htmlwebpackplugin',
      description : 'this is a webpack plugin',
      inject      : 'body',
      filename    : '../view/server-render.html',
      minify      : {
        minifyCSS         : true,
        minifyJS          : true,
        collapseWhitespace: false,
        sortAttributes    : true,
        sortClassName     : true
      },
      cache       : true,
      hash        : false
    })
  ],

};