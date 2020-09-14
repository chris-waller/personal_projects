const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonPaths = require('./common-paths');
const { UnusedFilesWebpackPlugin } = require("unused-files-webpack-plugin");

const projectType = "client";

const config = {
  entry: {
    // need to add more here later
    // vendor: ['semantic-ui-react'],
  },
  output: {
    path: commonPaths.clientOutputPath,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss', '.css'],
    alias: {
      styles: path.join(path.join(__dirname, '/../'), `${projectType}/src/styles`),
      utilities: path.join(path.join(__dirname, '/../'), `${projectType}/src/utilities`),
      images: path.join(path.join(__dirname, '/../'), `${projectType}/src/images`),
      '~': path.join(path.join(__dirname, '/../'), `${projectType}/src`),      
    },
  },
  module: {
    rules: [
      // JS loader
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      // File loader
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new UnusedFilesWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
  ],
};
module.exports = config;
