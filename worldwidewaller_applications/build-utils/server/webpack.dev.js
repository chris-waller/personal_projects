const webpack = require('webpack');
const commonPaths = require('../common-paths');
const nodeExternals = require('webpack-node-externals');

const port = process.env.PORT || 3002;
const config = {
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    app: `${commonPaths.serverAppEntry}/app.js`,
  },
  output: {
    filename: '[name].[hash].js',
  }, 
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.[cs][ac]?ss$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localsConvention: 'camelCase',
              sourceMap: true,
            },
          },
          {
            loader: 'resolve-url-loader',
            options: {
              root: '',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                indentedSyntax: true,
              },
            },
          },
        ],
      },
    ],
  },
};
module.exports = config;