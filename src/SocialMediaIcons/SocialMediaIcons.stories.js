import React from 'react';
import { storiesOf } from '@storybook/react';
import Hierarchy from '../../.storybook/hierarchyGroups';

import SocialMediaIcons from '.';

storiesOf(`${Hierarchy.COMPONENTS}|SocialMediaIcons`, module).addWithJSX(
    'Default',
    () => <SocialMediaIcons />
);
