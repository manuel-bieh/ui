const paths = require('./config/paths');

module.exports = {
    verbose: true,
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx,mjs}'],
    setupFiles: [
        '<rootDir>/node_modules/regenerator-runtime/runtime',
        '<rootDir>/config/polyfills.js',
    ],
    setupFilesAfterEnv: [
        '<rootDir>config/jest/setup.js',
        '@testing-library/react/cleanup-after-each',
    ],
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs,ts,tsx}',
        '<rootDir>/src/**/*.(spec|test).{js,jsx,mjs,ts,tsx}',
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
