const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// console.log(process.env.src); //CLI  set src="http://locahost:8004"
module.exports = {
  entry: {
    // 'app': ['./public/src/router/App', 'webpack-dev-server/client?http://localhost:4000', 'webpack/hot/only-dev-server',],
    // 'product': ['./public/src/product', 'webpack-dev-server/client?http://localhost:4000', 'webpack/hot/only-dev-server',],
    // 'animation': ['./public/src/animation', 'webpack-dev-server/client?http://localhost:4000', 'webpack/hot/only-dev-server',],
    // 'demo': ['./public/src/demo', 'webpack-dev-server/client?http://localhost:4000', 'webpack/hot/dev-server',],
     'todo': ['./public/src/redux/todos/index', 'webpack-dev-server/client?http://localhost:4000', 'webpack/hot/dev-server',],
    // 'fetch': ['./public/src/fetch/fetch', 'webpack-dev-server/client?http://localhost:4000', 'webpack/hot/dev-server',]
  },
  output: {
    filename: '[name].js',
    publicPath: '/'
  },
  devtool:'eval',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['react-hot', 'babel'],// short for babel-loader
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css'// right-to-left and the loader are separated by '!'. Short for style-loader!css-loader
      },
      {
        test:/\.js?$/,
        loader:'imports?imgSrc=>"http://locahost:8004"'
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(true)// production | true
        // NODE_ENV: 'development'// production | true
      }
    }),
    new HtmlWebpackPlugin({
      title      : 'Html Webpack Plugin',
      template   : './view/dev.init.html',
      keywords   : 'htmlwebpackplugin',
      description: 'this is a webpack plugin',
      inject     : 'body',
      filename   : '../view/app.html',
      minify     : {
        minifyCSS         : true,
        minifyJS          : true,
        collapseWhitespace: false,
        sortAttributes    : true,
        sortClassName     : true
      },
      xhtml      : true,
      hash       : false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    })
  ],
  devServer: {
    contentBase: './',//where index.html is
    publicPath: '/',//虚拟目录，脚本所在文件夹，与output.publicPath一致，与页面使用一致
    hot: true,
    historyApiFallback: true,
    host: 'localhost',
    port: 4000,
    stats: {colors: true},
    headers: {'Access-Control-Allow-Origin': '*'},
    proxy: {
      '/view/*': {
        target: 'http://localhost:4000/',
        secure: false,
        bypass: function (req, res, proxyOptions) {
          if (req.headers.accept.indexOf('html') !== -1) {
          //如果是 /view/* 是404，就转到 /view/app.html
            return '/view/app.html';
          }
        }
      }
    }
  }
};