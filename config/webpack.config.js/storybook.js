const { client: loaders } = require('./loaders');
const { client: plugins } = require('./plugins');

module.exports = (storybookBaseConfig) => {
    storybookBaseConfig.plugins = [...storybookBaseConfig.plugins, ...plugins];
    storybookBaseConfig.module.rules = [
        ...storybookBaseConfig.module.rules,
        ...loaders,
        {
            test: /\.stories\.jsx?$/,
            loaders: [
                {
                    loader: require.resolve(
                        '@storybook/addon-storysource/loader'
                    ),
                    // Options are necessary because of this issue:
                    // https://github.com/storybooks/storybook/issues/3681
                    options: { prettierConfig: { parser: 'babylon' } },
                },
            ],
            enforce: 'pre',
        },
    ];

    storybookBaseConfig.mode = 'development';
    return storybookBaseConfig;
};
