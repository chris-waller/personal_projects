const path = require('path');

const CLIENT_PROJECT_ROOT = path.resolve(__dirname, '../client/');


module.exports = {
  projectRoot: CLIENT_PROJECT_ROOT,
  outputPath: path.join(CLIENT_PROJECT_ROOT, 'dist/'),
  appEntry: path.join(CLIENT_PROJECT_ROOT, 'src/'),
};
