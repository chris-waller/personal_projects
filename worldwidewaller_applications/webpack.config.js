const webpackMerge = require('webpack-merge');
const buildValidations = require('./build-utils/build-validations');

// client configs
const clientConfigCommon = require('./build-utils/client/webpack.common');
const clientConfigDev = require('./build-utils/client/webpack.dev');
const clientConfigProd = require('./build-utils/client/webpack.prod');

// server configs
const serverConfigCommon = require('./build-utils/api/webpack.common');
const serverConfigDev = require('./build-utils/api/webpack.dev');
const serverConfigProd = require('./build-utils/api/webpack.prod');

// We can include Webpack plugins, through addons, that do
// not need to run every time we are developing.
const addons = (/* string | string[] */ addonsArg) => {
  // Normalize array of addons (flatten)
  const addonsMap = [...[addonsArg]]
    .filter(Boolean); // If addons is undefined, filter it out

  // eslint-disable-next-line import/no-dynamic-require, global-require
  return addonsMap.map((addonName) => require(`./build-utils/addons/webpack.${addonName}.js`));
};

module.exports = (env) => {
  // ensure that the environment variable exists
  if (!env) {
    throw new Error(buildValidations.ERR_NO_ENV_FLAG);
  }
  // ensure env.env is one of 'dev' or 'prod'
  if (env.env === undefined 
    || (env.env !== 'dev' && env.env!== 'prod'))
    throw new Error(buildValidations.ERR_INVALID_ENV);

  // ensure the env.app_type variable exists
  if (!env.app_type) {
    throw new Error(buildValidations.ERR_NO_APP_TYPE);
  }
  // ensure env.app_type is one of 'client' or 'api'
  if (env.app_type === undefined 
    || (env.app_type !== 'client' && env.app_type !== 'api'))
    throw new Error(buildValidations.ERR_INVALID_APP_TYPE);

  // Select which Webpack configuration to use (client/api and dev/prod)
  // eslint-disable-next-line import/no-dynamic-require, global-require
  let commonConfig = null;
  let envConfig = null;
  switch (env.env) {
    case 'dev':
      if (env.app_type === 'client') {
        commonConfig = clientConfigCommon;
        console.log('[Using client common config]');
        envConfig = clientConfigDev;
        console.log('[Using client dev config]');
      } else {
        commonConfig = serverConfigCommon;
        console.log('[Using api common config]');
        envConfig = serverConfigDev;
        console.log('[Using api dev config]');
      }      
      break;
    case 'prod':
      if (env.app_type === 'client') {
        commonConfig = clientConfigCommon;
        console.log('[Using client common config]');
        envConfig = clientConfigProd;
        console.log('[Using client prod config]');
      } else {
        commonConfig = serverConfigCommon;
        console.log('[Using api common config]');
        envConfig = serverConfigProd;
        console.log('[Using api prod config]');
      }
      
      break;
    default:
      throw new Error(buildValidations.ERR_INVALID_ENV);
  }
  console.log('\n');
  console.log('*****************************************************');
  env.app_type === 'client' ?
    console.log('Starting web application build...')
    : console.log('Starting nodejs API build...');
  console.log('*****************************************************');

  // 'webpack-merge' will combine our shared configurations, the environment/app-type specific
  // configurations and any addons
  const mergedConfig = webpackMerge(
    commonConfig,
    envConfig,
    ...addons(env.addons),
  );

  // return final webpack config object
  return mergedConfig;
};
