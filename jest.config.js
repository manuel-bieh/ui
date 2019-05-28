const paths = require('./config/paths');

module.exports = {
    verbose: true,
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx,mjs}'],
    setupFiles: [
        '<rootDir>/node_modules/regenerator-runtime/runtime',
        '<rootDir>/config/polyfills.js',
    ],
    setupTestFrameworkScriptFile: '<rootDir>config/jest/setup.js',
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx,mjs}',
        '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx,mjs}',
    ],
    testEnvironment: 'node',
    testURL: 'http://localhost',
    transform: {
        '^.+\\.(js|jsx|ts|tsx|mjs)$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
        '^(?!.*\\.(js|jsx|ts|tsx|mjs|css|json)$)':
            '<rootDir>/config/jest/fileTransform.js',
    },
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx|mjs)$',
    ],
    moduleNameMapper: {
        '^.+\\.css$': 'identity-obj-proxy',
    },
    moduleDirectories: paths.resolveModules,
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node', 'mjs'],
};
