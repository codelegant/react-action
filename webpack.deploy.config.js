/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/7/15 16:40
 */
var path = require('path');
var webpack = require("webpack");
module.exports = {
  entry: {
    'product': './public/src/product',
    // 'demo'         : './public/src/demo',
    'es5': './public/src/es5',
    // 'vendors': ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname + '/dist/'),
    filename: '[name].min.js'//[name].js
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',// short for babel-loader
        exclude: /node_modules/,
        query: {
          presets: ["react", "es2015", "stage-0"]
        }

      },
      {
        test: /\.css$/,
        loader: 'style!css'// right-to-left and the loader are separated by '!'. Short for style-loader!css-loader
      }
    ],
    // noParse:["react"]
  },
  externals: {
    "react": 'React',
    "react-dom": "ReactDOM",
    "react-router": "ReactRouter",
    'history': "History",
    'redux': 'Redux',
    'react-redux': 'ReactRedux'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')// production | true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.min.js'),
    // new webpack.IgnorePlugin(/react/,/react-dom/)
    // new webpack.ProvidePlugin({
    //   React: "React",
    //   react: "React",
    //   "window.react": "React",
    //   "window.React": "React"
    // })
  ],

};