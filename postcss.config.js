const paths = require('./config/paths');

module.exports = {
    plugins: [
        require('postcss-import')({
            path: [paths.src],
        }),
        require('postcss-nested')(),
        require('postcss-each')(),
        require('postcss-custom-media')({
            preserve: true,
        }),
        require('postcss-flexbugs-fixes')(),
        require('autoprefixer')(),
        require('postcss-custom-properties')(),
        require('postcss-assets')({
            basePath: './assets',
        }),
        require('postcss-discard-duplicates')(),
        require('postcss-discard-comments')(),
        require('postcss-discard-empty')(),
        process.env.NODE_ENV === 'production' && require('cssnano')(),
    ].filter(Boolean),
    sourceMap: true,
};
