const path = require('path');

const PROJECT_ROOT = path.resolve(__dirname, '../');
const CLIENT_ROOT = path.resolve(PROJECT_ROOT, './client');
const SERVER_ROOT = path.resolve(PROJECT_ROOT, './server');

module.exports = {
  // projectRoot: PROJECT_ROOT,
  clientRoot: CLIENT_ROOT,
  serverRoot: SERVER_ROOT,

  // client project paths
  clientOutputPath: path.join(CLIENT_ROOT, 'dist'),
  clientAppEntry: path.join(CLIENT_ROOT, 'src'), 
  // server project paths
  servertOutputPath: path.join(SERVER_ROOT, 'dist'),
  serverAppEntry: path.join(SERVER_ROOT, 'src'),  
};
