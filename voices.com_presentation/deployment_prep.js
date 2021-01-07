/*
The problem background:
----------------------------
•	Devs create files with the extension .sql that contain code to update databases as part of a deployment package
•	As part of the deployment building process, all dev .sql files are automatically included in 
    the “migrations” folder in the deployment package
•	Some .sql files can be run up to 12 hours before deployment occurs (i.e creating new tables)
•	Some .sql files must only be run after deployment occurs (i.e. dropping existing tables that are no longer used)
•	Currently all .sql files are run manually, preventing a full automated deployment process.

In 10-20 minute presentation, outline the following:
------------------------------------------------------
1.	A method that can take a deployment identifier (ie. a number) and find all the .sql files 
    relating to that deployment
2.	A way to differentiate pre and post deployment files
3.	In the language of your choice, or pseudo code, write a routine to read the “migrations” folder directory
      and build 2 lists of file names – those to be run in advance of deployment, and those to be run after.  
      Be prepared to present your routine and discuss how it works. 
      
Although your presentation is on Friday, part of being a Voices developer is working with timelines and of course,
setting timelines and expectations with other colleagues. How long do you think you would need to complete
this presentation? I would love you to provide an estimate to me and send your presentation back to me 
when you are complete prior to your interview. That will give Peter a chance to review before you present 
on Friday as well. 
*/

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
