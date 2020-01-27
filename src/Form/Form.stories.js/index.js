import React from 'react';
import { storiesOf } from '@storybook/react';
import Simple from './Simple';
import AsyncValidation from './AsyncValidation';
import CheckboxTypes from './CheckboxTypes';
import Submission from './Submission';

storiesOf(Group.Components('Form'), module)
    .add('Simple form', () => <Simple />)
    .add('Checkbox types', () => <CheckboxTypes />)
    .add('Async validation', () => <AsyncValidation />)
    .add('Submission', () => <Submission />);
