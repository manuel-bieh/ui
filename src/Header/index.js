// @flow
import * as React from 'react';
import classNames from 'classnames';
import css from './Header.module.css';

type PropsT = {
    children: any,
    className?: string,
};

const Header = ({ children, className }: PropsT) => {
    return (
        <header className={classNames(css.wrapper, className)}>
            {children}
        </header>
    );
};

export default Header;
