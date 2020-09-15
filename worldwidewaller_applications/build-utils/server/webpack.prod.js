const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonPaths = require('../common-paths');

const config = {
  mode: 'production',
  target: 'node',
  entry: {
    app: [`${commonPaths.serverAppEntry}/index.js`],
  },
  output: {
    filename: 'static/[name].[hash].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.[cs][ac]?ss$/i,
        use: [
          {
            // We configure 'MiniCssExtractPlugin'
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localsConvention: 'camelCase',
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/styles.[hash].css',
    }),
  ],
};
module.exports = config;
