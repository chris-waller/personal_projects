const webpack = require('webpack');
const commonPaths = require('../common-paths');

const port = process.env.PORT || 3000;

console.log('Loading client webpack dev...');
// TODO: optmize the chunks
const config = {
  mode: 'development',
  entry: {
    app: `${commonPaths.clientAppEntry}/index.js`,
  },
  output: {
    filename: '[name].[hash].js',
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin()
    new webpack.DefinePlugin({
      API_URL: JSON.stringify('http://localhost:3001'),
    })
  ],
  devServer: {
    host: 'localhost',
    port,
    historyApiFallback: true,
    hot: true,
    open: false, 
  }
}

module.exports = config;
