// var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: ['./src/browser/main.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js'

    // filename: 'public/bundle.js'
  },
  module: {
    loaders: [{

      // Less
      test: /\.less$/,
      loader: 'style!css!less'

      // jsx
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }

      // Images
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader?limit=8192'
    }]
  },
  plugins: [

    // new webpack.optimize.UglifyJsPlugin({minimize: true}),
    // new webpack.DefinePlugin({
    //     'process.env': {
    //       'NODE_ENV': JSON.stringify('production'),
    //     },
    // })
  ]
};
