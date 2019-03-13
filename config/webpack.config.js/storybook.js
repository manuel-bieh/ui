// const { client: loaders } = require('./loaders');
const { client: plugins } = require('./plugins');
const { cssModuleLoader, cssLoader } = require('./loaders');

module.exports = async ({ config }) => {
    config.plugins = [...config.plugins, ...plugins];
    config.module.rules = [
        ...config.module.rules.filter((rule) => {
            return rule.test.toString() !== '/\\.css$/';
        }),
        {
            oneOf: [cssModuleLoader, cssLoader],
        },
    ];

    config.module.rules.push({
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
    });

    return config;
};
