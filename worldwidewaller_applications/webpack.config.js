const webpackMerge = require('webpack-merge');
const buildValidations = require('./build-utils/build-validations');
const clientConfigCommon = require('./build-utils/client/webpack.common');
const clientConfigDev = require('./build-utils/client/webpack.dev');
const clientConfigProd = require('./build-utils/client/webpack.prod');

// We can include Webpack plugins, through addons, that do
// not need to run every time we are developing.
const addons = (/* string | string[] */ addonsArg) => {
  // Normalize array of addons (flatten)
  const addonsMap = [...[addonsArg]]
    .filter(Boolean); // If addons is undefined, filter it out

  // eslint-disable-next-line import/no-dynamic-require, global-require
  return addonsMap.map((addonName) => require(`./build-utils/addons/webpack.${addonName}.js`));
};

// 'env' will contain the environment variable from 'scripts' section in 'package.json'.
// eg. console.log(env); ==> { env: 'dev' }
module.exports = (env) => {
  // ensure that the environment variable exists
  if (!env) {
    throw new Error(buildValidations.ERR_NO_ENV_FLAG);
  }

  // Select which Webpack configuration to use (src/server and dev/prod)
  // eslint-disable-next-line import/no-dynamic-require, global-require
  let commonConfig = null;
  let envConfig = null;
  switch (env.env) {
    case 'dev':
      commonConfig = clientConfigCommon;
      console.log('[Using client common config]');
      envConfig = clientConfigDev;
      console.log('[Using client dev config]');
      break;
    case 'prod':
      commonConfig = clientConfigCommon;
      console.log('[Using client common config]');
      envConfig = clientConfigProd;
      console.log('[Using client prod config]');
      break;
    default:
      throw new Error(buildValidations.ERR_INVALID_ENV);
  }
  console.log('\n');
  console.log('*****************************************************');
  console.log('Starting web application build...');
  console.log('*****************************************************');

  // 'webpack-merge' will combine our shared configurations, the environment specific
  // configurations and any addons we are including
  const mergedConfig = webpackMerge(
    commonConfig,
    envConfig,
    ...addons(env.addons),
  );

  // return final webpack config object
  return mergedConfig;
};
