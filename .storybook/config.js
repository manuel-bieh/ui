import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import './stories/intro';
import '../src/index.module.css';
import hierarchyGroups from './hierarchyGroups';
import pkg from '../package.json';

const hierarchySeparator = '/';
const hierarchyRootSeparator = '|';

global.Group = new Proxy(
    {},
    {
        get: (target, name) => {
            if (hierarchyGroups.includes(name) === false) {
                console.warn(`Hierarchy Group ${name} does not exist.`);
            }

            return (component) =>
                `${name}${hierarchyRootSeparator}${component}`;
        },
    }
);

addParameters({
    options: {
        theme: {
            brandTitle: pkg.name,
            brandUrl: pkg.homepage,
        },
        hierarchySeparator,
        hierarchyRootSeparator,
    },
});

configure(
    require.context('../src/', true, /\.stories\.(js|jsx|ts|tsx)$/),
    module
);
