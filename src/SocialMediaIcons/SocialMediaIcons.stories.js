import React from 'react';
import { AngelList, GitHub, Instagram, Linkedin, Quora, Twitter, Xing } from './Icons';
import SocialMediaIcons from '.';

export default { title: 'Components|Social Media Icons' };

export const allInARow = () => <SocialMediaIcons />;

allInARow.story = {
    name: 'All in a row',
};

export const singleIcons = () => (
    <>
        <GitHub />
        <Twitter />
        <Linkedin />
        <Xing />
        <Instagram />
        <Quora />
        <AngelList />
    </>
);

singleIcons.story = {
    name: 'Single Icons',
};

export const withLabels = () => (
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
);

withLabels.story = {
    name: 'With labels',
};
