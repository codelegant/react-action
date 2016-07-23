var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: {
    'product': ['./public/src/product', 'webpack-dev-server/client?http://localhost:4000', 'webpack/hot/only-dev-server',],
    'animation': ['./public/src/animation', 'webpack-dev-server/client?http://localhost:4000', 'webpack/hot/only-dev-server',],
    // 'demo': ['./public/src/demo', 'webpack-dev-server/client?http://localhost:4000', 'webpack/hot/dev-server',],
    // 'todo': ['./public/src/redux/todos', 'webpack-dev-server/client?http://localhost:4000', 'webpack/hot/dev-server',],
    // 'fetch': ['./public/src/whatwg_fetch/fetch', 'webpack-dev-server/client?http://localhost:4000', 'webpack/hot/dev-server',]
  },
  output: {
    filename: '[name].js',
    publicPath: '/'
  },
  devtool:'eval',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'],// short for babel-loader
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css'// right-to-left and the loader are separated by '!'. Short for style-loader!css-loader
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(true)// production | true
        // NODE_ENV: 'development'// production | true
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './view/',//where index.html is
    publicPath: '/',//虚拟目录，脚本所在文件夹，与output.publicPath一致，与页面使用一致
    hot: true,
    historyApiFallback: true,
    host: 'localhost',
    port: 4000,
    stats: {colors: true},
    headers: {'Access-Control-Allow-Origin': '*'}
  }
};