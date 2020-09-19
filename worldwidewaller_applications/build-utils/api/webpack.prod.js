console.log('Loading api webpack prod...');

// TODO: optmize the chunks
const config = {
  mode: 'production',
  output: {
    filename: '[name].js',
    // filename: '[name].[hash].js',
  },
  devtool: 'source-map',  
 };
module.exports = config;
