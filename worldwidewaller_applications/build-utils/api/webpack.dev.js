console.log('Loading api webpack dev...');

const config = {
  mode: 'development',  
  output: {
    filename: '[name].js',
  }, 
  devtool: 'inline-source-map' 
};
module.exports = config;
