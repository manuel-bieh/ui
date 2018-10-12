import React from 'react';
import { storiesOf } from '@storybook/react';
import Hierarchy from '../../.storybook/hierarchyGroups';

import Header from '.';

storiesOf(`${Hierarchy.LAYOUT}|Footer`, module).addWithJSX(
    'With some content',
    () => <Header>Content</Header>
);
