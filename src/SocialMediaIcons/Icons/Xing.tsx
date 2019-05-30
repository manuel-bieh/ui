import * as React from 'react';
import classNames from 'classnames';
import css from './Icons.module.css';
import { IconProps } from './types';

const Xing = ({ className, label }: IconProps) => (
    <a
        href="https://www.xing.com/profile/Manuel_Bieh"
        className={classNames(className, css.wrapper)}
    >
        <img
            alt="Logo: Xing"
            src={require('../../../assets/img/social-media/xing.svg')}
            className={css.icon}
        />
        {label && <span>{label}</span>}
    </a>
);

export default Xing;
