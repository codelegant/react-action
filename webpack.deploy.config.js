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
    // 'es5': './public/src/es5',
    // 'vendors': ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname + '/dist/'),
    filename: '[name].min.js',//[name].js
    libraryTarget: "var"
  },
  module: {
    resolve: {
      alias: {
        // 'react$': path.resolve(__dirname, 'node_modules/react/dist/react-with-addons.js'),
        'react': path.resolve(__dirname, 'node_modules/react/dist/react-with-addons.js'),
        // 'react-dom': path.resolve(__dirname, 'node_modules/react/dist/react-with-addons.min.js'),
        // 'react': 'react/addons',
        // 'react/lib': 'react',
        // 'react/dist': 'react'

      }
    },
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
    noParse: [
      // path.resolve(__dirname, 'node_modules/react/dist/react-with-addons.js'),
      // path.resolve(__dirname, 'node_modules/react/dist/react-with-addons.min.js'),
      // path.resolve(__dirname, 'node_modules/react/dist/react.js'),
      // path.resolve(__dirname, 'node_modules/react/dist/react.min.js'),
      // path.resolve(__dirname, 'node_modules/react-dom/dist/react-dom.min.js'),
      // path.resolve(__dirname, 'node_modules/react-dom/dist/react-dom.js')
    ]
  },
  target: "web",
  externals: {
    "react": 'React',
    "react-dom": "ReactDOM"
    // "react-router": "ReactRouter",
    // 'history': "History",
    // 'redux': 'Redux',
    // 'react-redux': 'ReactRedux'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')// production | true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false}
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "vendors",
    //   filename: "vendors.min.js",
    //   minChunks: Infinity
    // }),
    // new webpack.IgnorePlugin(/react/,/react-dom/)
    /*不用在文件中显示引入 react react-dom */
    new webpack.ProvidePlugin({
      "React": "react",
      "ReactDOM": "react-dom",
      // "window.React": "React",
    })
  ],

};