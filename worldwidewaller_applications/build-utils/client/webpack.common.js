const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonPaths = require('../common-paths');

console.log('Loading client webpack common...');
const config = {
  entry: {
    vendor: ['semantic-ui-react'],
  },
  output: {
    path: commonPaths.clientOutputPath,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.json', '.scss', '.css'],
    alias: {
      styles: path.join(commonPaths.clientProjectRoot, 'src/styles'),
      utilities: path.join(commonPaths.clientProjectRoot, 'src/utilities'),
      images: path.join(commonPaths.clientProjectRoot, 'src/images'),
      '~': path.join(commonPaths.clientProjectRoot, 'src'),
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
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
  ],
};
module.exports = config;
