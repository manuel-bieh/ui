import * as React from 'react';
import css from './Footer.module.css';

type PropsT = {
    children: any;
};

const Footer = ({ children }: PropsT) => {
    return <footer className={css.wrapper}>{children}</footer>;
};

export default Footer;
