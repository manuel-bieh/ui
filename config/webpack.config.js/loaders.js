const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const babelLoader = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
};

const cssLoaderClient = {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
        'css-hot-loader',
        MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                camelCase: true,
                modules: true,
                importLoaders: 1,
                sourceMap: true,
                localIdentName: '[name]__[local]--[hash:base64:5]',
            },
        },
        {
            loader: 'postcss-loader',
            options: {
                sourceMap: true,
            },
        },
    ],
};

const urlLoaderClient = {
    test: /\.(png|jpe?g|gif|svg)$/,
    use: [
        {
            loader: require.resolve('url-loader'),
            options: {
                name: 'assets/[name].[ext]',
                limit: 2048,
            },
        },
        {
            loader: 'image-webpack-loader',
            options: {
                // disable: true,
            },
        },
    ],
};

const fileLoaderClient = {
    exclude: [/\.(js|css|mjs|html|json|ejs)$/],
    use: [
        {
            loader: 'file-loader',
            options: {
                name: 'assets/[name].[ext]',
            },
        },
    ],
};

// Write css files from node_modules to its own vendor.css file
const externalCssLoaderClient = {
    test: /\.css$/,
    include: /node_modules/,
    use: [MiniCssExtractPlugin.loader, 'css-loader'],
};

const client = [
    {
        oneOf: [
            babelLoader,
            cssLoaderClient,
            urlLoaderClient,
            fileLoaderClient,
            externalCssLoaderClient,
        ],
    },
];

module.exports = {
    client,
};
