import * as React from 'react';
import { Github, Twitter, Xing, Linkedin, Instagram, Quora, AngelList } from './Icons';

type Props = {
    className?: string;
    iconClassName?: string;
};

const SocialMediaIcons = ({ className, iconClassName }: Props) => (
    <section className={className}>
        <Github className={iconClassName} />
        <Twitter className={iconClassName} />
        <Linkedin className={iconClassName} />
        <Xing className={iconClassName} />
        <Instagram className={iconClassName} />
        <Quora className={iconClassName} />
        <AngelList className={iconClassName} />
    </section>
);

export default SocialMediaIcons;
