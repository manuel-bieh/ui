import React from 'react';
import { storiesOf } from '@storybook/react';
import rm from '../README.md';

console.log('RM:', rm);

storiesOf(`Introduction`).add('Getting started', () => <p>Hello World</p>);
