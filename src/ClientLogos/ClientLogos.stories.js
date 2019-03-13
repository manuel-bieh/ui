import React from 'react';
import { storiesOf } from '@storybook/react';
import Hierarchy from '../../.storybook/hierarchyGroups';

import ClientLogos from '.';

storiesOf(`${Hierarchy.COMPONENTS}|ClientLogos`, module).add('Default', () => (
    <ClientLogos />
));
