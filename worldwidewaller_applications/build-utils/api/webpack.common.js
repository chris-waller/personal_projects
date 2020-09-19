const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const commonPaths = require('../common-paths');

console.log('Loading api webpack common...');
const config = {
  entry: {
    server: path.join(commonPaths.apiProjectRoot, 'server/bin/server.js')
  },
  output: {
    path: commonPaths.apiOutputPath,
  },
  target: 'node',
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false,   // if you don't put this is, __dirname
    __filename: false,  // and __filename return blank or /
  },
  externals: [nodeExternals()], // Need this to avoid error when 
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      utilities: path.join(commonPaths.apiProjectRoot, 'src/utilities'),
      '~': path.join(commonPaths.apiProjectRoot, 'src'),
    },
  },
  plugins: [
    new CopyWebpackPlugin({
        patterns: [
            { from: 'static' }
        ]
    })
  ],
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
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  }, 
};
module.exports = config;
