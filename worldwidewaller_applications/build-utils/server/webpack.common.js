const path = require('path');
const commonPaths = require('../common-paths');

console.log("Retrieved server common webpack config");

const config = {
  entry: {
    // need to add more here later
    // vendor: ['semantic-ui-react'],
  },
  output: {
    // publicPath: '/',
    path: commonPaths.servertOutputPath,
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss', '.css'],
    alias: {
      root: commonPaths.serverAppEntry,
      styles: path.join(commonPaths.serverAppEntry, '/styles'),
      utilities: path.join(commonPaths.serverAppEntry, '/utilities'),
      images: path.join(commonPaths.serverAppEntry, '/images'),
      '~': path.join(commonPaths.serverAppEntry, '/'),      
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
};
module.exports = config;
