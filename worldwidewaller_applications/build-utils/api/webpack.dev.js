const webpack = require('webpack');
const commonPaths = require('../common-paths');



console.log('Loading api webpack dev...');
// TODO: optmize the chunks???
const config = {
  mode: 'development',  
  output: {
    filename: '[name].js',
  }, 
  devtool: 'inline-source-map' 
};
module.exports = config;
