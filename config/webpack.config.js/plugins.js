const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const env = require('../env')();

const client = [
    new webpack.DefinePlugin(env.stringified),
    new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
    }),
];

module.exports = {
    client,
};
