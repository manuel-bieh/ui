import * as React from 'react';
import css from './SocialMediaIcons.module.css';
import {
    Github,
    Twitter,
    Xing,
    Linkedin,
    Instagram,
    Quora,
    AngelList,
} from './Icons';

const SocialMediaIcons = () => (
    <section className={css.wrapper}>
        <Github />
        <Twitter />
        <Xing />
        <Linkedin />
        <Instagram />
        <Quora />
        <AngelList />
    </section>
);

export default SocialMediaIcons;
