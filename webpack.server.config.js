/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/9/1 10:58
 */
/**
 * webpack.server.config.js
 * babel-register 插件，会自动编译转换使用 require 关键字加载的文件
 */
require('babel-register');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/**
 * 将模块与静态数据导入
 */
const ItemList = require('./public/src/server-render/ItemList');
const model = require('./public/src/server-render/model');
/**
 * 工厂方法，将类转换为函数(React Element)
 */
const itemList = React.createFactory(ItemList);
/**
 * 结合数据渲染组件
 */
const reactString = ReactDOMServer.renderToStaticMarkup(itemList(model));
module.exports = {
  entry    : {
    'bundle': './public/src/server-render/browser'
  },
  output   : {
    path    : path.join(__dirname + '/dist/'),
    filename: '[name].min.js',//[name].js
  },
  module   : {
    loaders: [
      {
        test   : /\.js?$/,
        loader : 'babel',// short for babel-loader
        exclude: /node_modules/

      }
    ],
  },
  externals: {
    'react'    : 'React',
    'react-dom': 'ReactDOM',
  },
  resolveLoader: {
    moduleExtensions: ["-loader"],
  },
  plugins  : [
    /**
     * 将生成的字符串 reactString 插入到模板中
     */
    new HtmlWebpackPlugin({
      title      : '预生成静态文件',
      template   : './view/server.init.html',
      body       : reactString,
      keywords   : 'htmlwebpackplugin',
      description: 'this is a webpack plugin',
      inject     : 'body',
      filename   : '../view/server-render.html',
      minify     : {
        minifyCSS         : true,
        minifyJS          : true,
        collapseWhitespace: false,
        sortAttributes    : true,
        sortClassName     : true
      },
      cache      : true,
      hash       : false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')// production | true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      output  : {comments: false}
    })
  ],

};