const paths = require('./config/paths');

module.exports = {
    extends: ['wiremore', 'wiremore/react', 'wiremore/typescript'],
    settings: {
        'import/resolver': {
            node: {
                paths: paths.resolveModules,
            },
        },
    },
    rules: {
        'import/named': 0,
        'import/no-unassigned-import': 0,
        'import/no-named-as-default-member': 0,
        'import/namespace': [2, { allowComputed: true }],
        'prettier/prettier': 2,
        'react-hooks/exhaustive-deps': 1,
        'no-alert': 1,
    },
};
