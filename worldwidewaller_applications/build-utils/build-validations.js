const chalk = require('chalk');

const ERR_NO_ENV_FLAG = chalk.red(
  'You must pass an --env.env flag into your build for webpack to work!',
);

const ERR_INVALID_ENV = chalk.red(
  'Invalid env.env variable. Accepted values: \'dev\' & \'prod\''
);

const ERR_NO_APP_TYPE = chalk.red(
  'You must pass an --env.app_type flag into your build for webpack to work!',
);

const ERR_INVALID_APP_TYPE = chalk.red(
  'Invalid env.app_type variable. Accepted values: \'client\' & \'api\''
);

module.exports = {
  ERR_NO_ENV_FLAG,
  ERR_INVALID_ENV,
  ERR_NO_APP_TYPE,
  ERR_INVALID_APP_TYPE,
};
