// config/webpack.js
var path = require('path');
var webpack = require('webpack');
// compile js assets into a single bundle file
module.exports.webpack = {
  options: {
    devtool: 'eval',
    entry: [
      './assets/js/index.js',
    ],
    output: {
      path: path.resolve(__dirname, './../.tmp/public/js'),
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    module: {
      loaders: [
        // requires "npm install --save-dev babel-loader"
        {
          include: [
            path.resolve(__dirname, './../assets/js')
          ],
          test: /\.js$/,
          loaders: ['babel-loader']
        }
      ]
    }
  },

  // docs: https://webpack.github.io/docs/node.js-api.html#compiler
  watchOptions: {
    aggregateTimeout: 300
  }
};
