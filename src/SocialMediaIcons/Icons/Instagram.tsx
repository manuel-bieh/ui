import * as React from 'react';
import classNames from 'classnames';
import css from './Icons.module.css';
import { IconProps } from './types';

const Instagram = ({ className, label }: IconProps) => (
    <a href="https://www.instagram.com/manuelbieh/" className={classNames(className, css.wrapper)}>
        <img
            alt="Logo: Instagram"
            src={require('../../assets/img/social-media/instagram.svg')}
            className={css.icon}
        />
        {label && <span>{label}</span>}
    </a>
);

export default Instagram;
