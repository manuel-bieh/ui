import * as React from 'react';
import classNames from 'classnames';
import css from './Icons.module.css';
import { IconProps } from './types';

const Github = ({ className, label }: IconProps) => (
    <a
        href="https://www.github.com/manuelbieh"
        className={classNames(className, css.wrapper)}
    >
        <img
            alt="Logo: Github"
            src={require('../../assets/img/social-media/github.svg')}
            className={css.icon}
        />
        {label && <span>{label}</span>}
    </a>
);

export default Github;
