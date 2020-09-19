const path = require('path');
const commonPaths = require('../common-paths');

console.log('Loading api webpack prod...');
// TODO: optmize the chunks
const config = {
  mode: 'production',
  entry: {
    server: path.join(commonPaths.apiAppEntry, '/bin/server.js')
  },
  output: {
    filename: '[name].js',
  },
  devtool: 'source-map',
};
module.exports = config;
