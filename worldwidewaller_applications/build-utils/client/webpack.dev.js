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
  ],
  devServer: {
    host: 'localhost',
    port,
    historyApiFallback: true,
    hot: true,
    open: false,
    proxy: {
      "http://localhost:3001": {
        "changeOrigin": true,
        "cookieDomainRewrite": "localhost",
        "target": 'http://localhost:3001',
        onProxyReq: proxyReq => {
          // Browers may send Origin headers even with same-origin
          // requests. To prevent CORS issues, we have to change
          // the Origin to match the target URL.
          if (proxyReq.getHeader('origin')) {
            proxyReq.setHeader('origin', gdc);
          }
        }
      },
    },
  }
}

module.exports = config;
