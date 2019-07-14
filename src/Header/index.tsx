import * as React from 'react';
import classNames from 'classnames';
import css from './Header.module.css';

type Props = {
    children: any;
    className?: string;
};

const Header: React.FC<Props> = ({ children, className }: Props) => {
    return (
        <header className={classNames(css.wrapper, className)}>
            {children}
        </header>
    );
};

export default Header;
