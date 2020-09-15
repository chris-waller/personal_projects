const webpack = require('webpack');

const path = require('path');

const PROJECT_ROOT = path.resolve(__dirname);

const port = process.env.PORT || 3000;

const config = {
  mode: 'development',
  entry: {
    app: `${PROJECT_ROOT}/index.js`,
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
      // File loader
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        use: [
          'file-loader',
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
      '/api': {
        target: 'http://localhost:3001',
        pathRewrite: { '^/api': '' },
        secure: false,
        changeOrigin: true,
      },
    },
  },
};
module.exports = config;
