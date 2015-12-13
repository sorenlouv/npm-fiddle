var webpack = require('webpack');
var path = require("path");

module.exports = {
    entry: {
        app: ["./src/main.js"]
    },
    output: {
        // path: __dirname,
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
        // filename: "public/bundle.js"
    },
    module: {
        loaders: [{
            test: /\.less$/,
            loader: "style!css!less"
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
              presets: ['react', 'es2015']
            }
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
