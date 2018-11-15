import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// import rm from '../README.md';

// const withDocs = withInfo(rm);

// storiesOf(`Introduction`).add(
//     'Getting started',
//     withDocs(() => <p>Hello World</p>)
// );
storiesOf(`Introduction`).add('Getting started', () => <p>Hello World</p>);
