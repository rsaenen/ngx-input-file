var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: {
    'ngx-input-file': path.join(__dirname, 'src', 'index.ts')
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.css', '.less', '.html']
  },
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "ngx-input-file.umd.js",
    library: ["ngx-input-file"],
    libraryTarget: "umd"
  },
  externals: [
    /^@angular\//
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        use: 'raw-loader'
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader!less-loader" })
      }
    ]
  }
};

//Different Environment Setup

if (process.env.NODE_ENV === 'prod') {
  config.module.rules.push({
    test: /\.ts$/, use: 'strip-loader?strip[]=debug,strip[]=console.log'
  });
}

module.exports = config;