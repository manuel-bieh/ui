import React from 'react';
import { storiesOf } from '@storybook/react';
import Hierarchy from '../../.storybook/hierarchyGroups';
import {
    AngelList,
    GitHub,
    Instagram,
    Linkedin,
    Quora,
    Twitter,
    Xing,
} from './Icons';
import SocialMediaIcons from '.';

storiesOf(`${Hierarchy.COMPONENTS}|SocialMediaIcons`, module)
    .add('All in a row', () => <SocialMediaIcons />)
    .add('Single Icons', () => (
        <>
            <GitHub />
            <Twitter />
            <Linkedin />
            <Xing />
            <Instagram />
            <Quora />
            <AngelList />
        </>
    ))
    .add('With labels', () => (
        <>
            <GitHub label="manuelbieh" />
            <br />
            <Twitter label="@manuelbieh" />
            <br />
            <Linkedin />
            <br />
            <Xing />
            <br />
            <Instagram label="Instagram" />
            <br />
            <Quora />
            <br />
            <AngelList label="AngelList" />
            <br />
        </>
    ));
