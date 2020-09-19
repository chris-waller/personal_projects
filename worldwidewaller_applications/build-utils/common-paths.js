const path = require('path');

const CLIENT_PROJECT_ROOT = path.resolve(__dirname, '../client/');
const API_PROJECT_ROOT = path.resolve(__dirname, '../api/');

module.exports = {
  clientProjectRoot: CLIENT_PROJECT_ROOT,  
  clientOutputPath: path.join(CLIENT_PROJECT_ROOT, 'dist/'),
  clientAppEntry: path.join(CLIENT_PROJECT_ROOT, 'src/'),

  apiProjectRoot: API_PROJECT_ROOT,
  apiOutputPath: path.join(API_PROJECT_ROOT, 'dist/'),
  apiAppEntry: path.join(API_PROJECT_ROOT, 'server/'),
};
