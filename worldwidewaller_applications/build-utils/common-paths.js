const path = require('path');

const CLIENT_PROJECT_ROOT = path.resolve(__dirname, '../client/');
const API_PROJECT_ROOT = path.resolve(__dirname, '../api/');


module.exports = {
  clientProjectRoot: CLIENT_PROJECT_ROOT,
  apiProjectRoot: API_PROJECT_ROOT,
  outputPath: path.join(CLIENT_PROJECT_ROOT, 'dist/'),
  appEntry: path.join(CLIENT_PROJECT_ROOT, 'src/'),
};
