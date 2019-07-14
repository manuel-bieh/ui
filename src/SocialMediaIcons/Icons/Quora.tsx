import * as React from 'react';
import classNames from 'classnames';
import css from './Icons.module.css';
import { IconProps } from './types';

const Quora = ({ className, label }: IconProps) => (
    <a
        href="https://www.quora.com/profile/Manuel-Bieh"
        className={classNames(className, css.wrapper)}
    >
        <img
            alt="Logo: Quora"
            src={require('../../assets/img/social-media/quora.svg')}
            className={css.icon}
        />
        {label && <span>{label}</span>}
    </a>
);

export default Quora;
