const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const generateSourceMap = process.env.OMIT_SOURCEMAP === 'true' ? false : true;
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

// temporary wrapper function around getCSSModuleLocalIdent until this issue is resolved:
// https://github.com/webpack-contrib/css-loader/pull/965
const getLocalIdentWorkaround = (context, localIdentName, localName, options) => {
    if (options && options.context === null) {
        options.context = undefined;
    }
    return getCSSModuleLocalIdent(context, localIdentName, localName, options);
};

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;

const babelLoader = {
    test: /\.(js|jsx|ts|tsx|mjs)$/,
    exclude: /node_modules/,
    loader: require.resolve('babel-loader'),
    options: {
        plugins: [
            [
                require.resolve('babel-plugin-named-asset-import'),
                {
                    loaderMap: {
                        svg: {
                            ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
                        },
                    },
                },
            ],
        ],
        cacheDirectory: true,
        cacheCompression: process.env.NODE_ENV === 'production',
        compact: process.env.NODE_ENV === 'production',
    },
};

const cssModuleLoader = {
    test: cssModuleRegex,
    use: [
        require.resolve('css-hot-loader'),
        process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : require.resolve('style-loader'),
        {
            loader: require.resolve('css-loader'),
            options: {
                modules: {
                    getLocalIdent: getLocalIdentWorkaround,
                    exportLocalsConvention: 'camelCase',
                },
                importLoaders: 1,
                sourceMap: generateSourceMap,
            },
        },
        {
            loader: require.resolve('postcss-loader'),
            options: {
                sourceMap: generateSourceMap,
            },
        },
    ],
};

const cssLoader = {
    test: cssRegex,
    exclude: cssModuleRegex,
    use: [
        require.resolve('css-hot-loader'),
        process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : require.resolve('style-loader'),
        require.resolve('css-loader'),
        {
            loader: require.resolve('postcss-loader'),
            options: {
                sourceMap: generateSourceMap,
            },
        },
    ],
};

const urlLoader = {
    test: /\.(png|jpe?g|gif|svg)$/,
    loader: require.resolve('url-loader'),
    options: {
        limit: 2048,
        name: 'assets/[name].[hash:8].[ext]',
    },
};

const fileLoader = {
    exclude: [/\.(js|jsx|ts|tsx|css|mjs|html|ejs|json|md)$/],
    use: [
        {
            loader: require.resolve('file-loader'),
            options: {
                name: 'assets/[name].[hash:8].[ext]',
            },
        },
    ],
};

const client = [
    {
        oneOf: [babelLoader, cssModuleLoader, cssLoader, urlLoader, fileLoader],
    },
];

module.exports = {
    client,
    cssModuleLoader,
    cssLoader,
};

// module.exports.fileLoader = fileLoader;
// module.exports.cssModuleLoader = cssModuleLoader;
// module.exports.cssLoader = cssLoader;
