const paths = require('./config/paths');

module.exports = {
    extends: [
        '@werkzeugkiste',
        '@werkzeugkiste/eslint-config/react',
        '@werkzeugkiste/eslint-config/typescript',
    ],
    settings: {
        'import/resolver': {
            node: {
                paths: paths.resolveModules,
            },
        },
    },
    // rules: {
    //     'import/named': 0,
    //     'import/no-unassigned-import': 0,
    //     'import/no-named-as-default-member': 0,
    //     'import/namespace': [2, { allowComputed: true }],
    //     'prettier/prettier': 2,
    //     'react-hooks/exhaustive-deps': 1,
    //     'no-alert': 1,
    //     'security/detect-object-injection': 0,
    // },
    overrides: [
        {
            files: ['*.stories.js', 'stories.js', '**/*.stories.js/*.{js,jsx,ts,tsx}'],
            globals: {
                Hierarchy: true,
                Group: true,
            },
            rules: {
                'react/display-name': 0,
            },
        },
        //     {
        //         files: '**/*.tsx',
        //         rules: {
        //             'react/prop-types': 0,
        //             '@typescript-eslint/no-angle-bracket-type-assertion': 0,
        //         },
        //     },
    ],
};
