const paths = require('../paths');

module.exports = {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.json', '.css'],
    modules: paths.resolveModules,
};
