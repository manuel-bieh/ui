const webpack = require('webpack');
// const rimraf = require('rimraf');

const webpackConfig = require('../config/webpack.config.js')(
    process.env.NODE_ENV || 'production'
);
// const paths = require('../config/paths');
const { logMessage, compilerPromise } = require('./utils');

const isWatchMode = process.argv.includes('--watch');

const build = async () => {
    // if (!isWatchMode) {
    //     rimraf.sync(paths.clientBuild);
    // }

    const [clientConfig] = webpackConfig;
    const multiCompiler = webpack([clientConfig]);

    const clientCompiler = multiCompiler.compilers[0];
    const clientPromise = compilerPromise('client', clientCompiler);

    clientCompiler.watch({}, (error, stats) => {
        if (!error && !stats.hasErrors()) {
            console.log(stats.toString(clientConfig.stats));
            // require('fs').writeFileSync(
            //     './stats.json',
            //     JSON.stringify(stats.toJson())
            // );
            return;
        }
    });

    // wait until client build is done
    try {
        await clientPromise;
        logMessage('Done!', 'info');
    } catch (error) {
        logMessage(error, 'error');
    }

    if (!isWatchMode) {
        process.exit();
    }
};

build();
