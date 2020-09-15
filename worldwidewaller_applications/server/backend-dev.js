const path = require('path');
const webpack = require('webpack');
const spawn = require('child_process').spawn;

const webpackConfig = require('../webpack.config.js');

const env = {
  env : 'dev',
  projectType: 'server',
}
const compiler = webpack(webpackConfig(env));
const watchConfig = {
    // compiler watch configuration
    // see https://webpack.js.org/configuration/watch/
    aggregateTimeout: 300,
    poll: 1000
};

let serverControl;

console.log("just before watch");
compiler.watch(watchConfig, (err, stats) => {
    if (err) {
        console.error("compilor error", err.stack || err);
        if (err.details) {
            console.error(err.details);
        }
        return;
    }

    const info = stats.toJson();

    if (stats.hasErrors()) {
        info.errors.forEach(message => console.log(message));
        return;
    }

    if (stats.hasWarnings()) {
        info.warnings.forEach(message => console.log(message));
    }

    if (serverControl) {
        serverControl.kill();
    }

    // change app.js to the relative path to the bundle created by webpack, if necessary
    serverControl = spawn('node', [path.resolve(__dirname, 'app.js')]);
    console.log('looking for the file at:', path.resolve(__dirname, 'app.js'));

    serverControl.stdout.on('data', data => console.log(data.toString()));
    serverControl.stderr.on('data', data => console.error(data.toString()));
});

/*
compiler.run(() => {
    console.log('running');
});
*/
