import * as React from 'react';
import classNames from 'classnames';
import css from './Icons.module.css';
import { IconProps } from './types';

const Twitter = ({ className, label }: IconProps) => (
    <a href="https://www.twitter.com/manuelbieh" className={classNames(className, css.wrapper)}>
        <img
            alt="Logo: Twitter"
            src={require('../../assets/img/social-media/twitter.svg')}
            className={css.icon}
        />
        {label && <span>{label}</span>}
    </a>
);

export default Twitter;
