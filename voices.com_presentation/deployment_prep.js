/**
 * This script will search through a static directory to search for sql files required for pre and
 * post deployment.
 * For this assignment, I will assume the following file format: 
 *    Format:   migrate_[major_version].[minor_version].[patch_number]_[pre/post].sql
 *    Examples: migrate_1.0.0_pre.sql, migrate_1.0.0_post.sql, migrate_1.0.1_post.sql
 * @param {string} deploymentVersion The version of the deployment to prepare
 */
function prepareScripts(deploymentVersion) {
  const scriptsToDeploy = {
    preDeploy: [],
    postDeploy: []
  };

  if (deploymentVersion === undefined || deploymentVersion === null) {
    throw new Error ('Must provide a deployment version.'); 
  }

  console.log('Prepping migrations for version ', deploymentVersion);

  // Search through the known directory for all sql scripts of the relevant version.  
  const fs = require('fs');
  const migrationsFolder = './migrations';
  const regex = new RegExp('migrate_' + deploymentVersion + '_(pre|post).sql', 'g'); 
  fs.readdir(migrationsFolder, (err, files) => {
    if (err) throw new Error('Error while traversing the migrations directory', err);
    files.forEach(file => {
      
      // file is the correct version and type (pre vs post) -- add it to the appropriate array
      if (file.match(regex)) {        
        if (file.includes('pre')) {          
          scriptsToDeploy.preDeploy.push(file);                    
        } else {          
          scriptsToDeploy.postDeploy.push(file);
        }
      }
    });
    
    console.log('Sucessfully completed the deployment preprations for ', deploymentVersion);
    console.log(scriptsToDeploy);    
  });
  return scriptsToDeploy;
}


// script execution here
try {
  console.log('Starting deployment preparation...', '\n');
  
  // we only care about the path params from node which start on array index 2
  const params = process.argv.slice(2);
  if (params.length === 0) {
    throw new Error('Must provide a deployment version');
  }
  prepareScripts(params[0]);
} catch (ex) {
  console.log('Failed to execute the script.', ex.toString());
}
