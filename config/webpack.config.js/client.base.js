const path = require('path');
const paths = require('../paths');
const { client: clientLoaders } = require('./loaders');
const resolvers = require('./resolvers');
const plugins = require('./plugins');
const externals = require('./externals');

module.exports = {
    name: 'client',
    target: 'web',
    entry: {
        index: path.join(paths.src, 'index.ts'),
    },
    output: {
        chunkFilename: '[name].chunk.js',
        filename: '[name].js',
        libraryTarget: 'commonjs2',
        // path: path.join(paths.clientBuild, paths.publicPath),
        path: path.join(paths.clientBuild, 'cjs'),
        publicPath: paths.publicPath,
    },
    module: {
        rules: clientLoaders,
    },
    resolve: { ...resolvers },
    plugins: [...plugins.client],
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
    externals: externals,
    // optimization: {
    //     namedModules: true,
    //     noEmitOnErrors: true,
    //     splitChunks: {
    //         cacheGroups: {
    //             clientLogos: {
    //                 test: /[\\/]assets[\\/]img[\\/]clients[\\/]/,
    //                 name: 'clients',
    //                 chunks: 'all',
    //             },
    //             techLogos: {
    //                 test: /[\\/]assets[\\/]img[\\/]tech[\\/]/,
    //                 name: 'tech',
    //                 chunks: 'all',
    //             },
    //         },
    //     },
    // },
    stats: {
        cached: false,
        cachedAssets: false,
        chunks: false,
        chunkModules: false,
        colors: true,
        hash: false,
        modules: false,
        reasons: false,
        timings: true,
        version: false,
    },
};
