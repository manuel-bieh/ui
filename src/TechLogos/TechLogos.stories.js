import React from 'react';
import { storiesOf } from '@storybook/react';
import Hierarchy from '../../.storybook/hierarchyGroups';

import TechLogos from '.';

storiesOf(`${Hierarchy.COMPONENTS}|TechLogos`).addWithJSX('Default', () => (
    <TechLogos />
));
