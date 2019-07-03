import React, { useMemo } from 'react';
import classNames from 'classnames';
import { ucfirst } from '../utils';
import css from './Grid.module.css';

type Props = {
    alignItems?: 'start' | 'end' | 'center';
    center?: boolean;
    children?: any;
    className?: string;
    element?: any;
    justifyContent?: 'start' | 'end' | 'center';
    style?: {};
    textAlign?: 'left' | 'right' | 'center';
    // Available sizes
    xs?: number | string;
    sm?: number | string;
    md?: number | string;
    lg?: number | string;
    xl?: number | string;
};

const Column = ({
    alignItems,
    className,
    children,
    justifyContent,
    element: Element = 'div',
    textAlign,
    ...props
}: Props) => {
    const { xs = 12, sm, md, lg, xl } = props;

    const sizeClass = useMemo(
        () => ({
            [css[`colXs${xs}`]]: xs,
            [css[`colSm${sm}`]]: sm,
            [css[`colMd${md}`]]: md,
            [css[`colLg${lg}`]]: lg,
            [css[`colXl${xl}`]]: xl,
        }),
        [lg, md, sm, xl, xs]
    );

    return (
        <Element
            className={classNames(
                css.col,
                sizeClass,
                textAlign && css[`textAlign${ucfirst(textAlign)}`],
                alignItems && css[`alignItems${ucfirst(alignItems)}`],
                justifyContent &&
                    css[`justifyContent${ucfirst(justifyContent)}`],
                className
            )}
        >
            {children}
        </Element>
    );
};

export default Column;
