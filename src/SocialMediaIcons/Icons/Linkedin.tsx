import * as React from 'react';
import classNames from 'classnames';
import css from './Icons.module.css';
import { IconProps } from './types';

const Linkedin = ({ className, label }: IconProps) => (
    <a
        href="https://www.linkedin.com/in/manuelbieh/"
        className={classNames(className, css.wrapper)}
    >
        <img
            alt="Logo: Linkedin"
            src={require('../../../assets/img/social-media/linkedin.svg')}
            className={css.icon}
        />
        {label && <span>{label}</span>}
    </a>
);

export default Linkedin;
