import React from 'react';
import classNames from 'classnames';
import { ucfirst } from '../utils';
import css from './Grid.module.css';

type Props = {
    [prop: string]: any;
    align?: 'start' | 'end' | 'stretch' | 'center';
    centered?: boolean;
    children: any;
    className?: string;
    el?: any;
    fluid?: boolean;
    justifyContent?: 'start' | 'end' | 'center';
    seamless?: boolean;
    textAlign?: 'left' | 'right' | 'center';
};

const Grid = ({
    align,
    centered,
    children,
    className,
    element: Element = 'div',
    justifyContent,
    fluid,
    seamless,
    textAlign = 'left',
    ...props
}: Props) => (
    <Element
        className={classNames(css.grid, className, {
            [css[`textAlign${ucfirst(textAlign)}`]]: Boolean(textAlign),
            [css[`align${ucfirst(align || '')}`]]: Boolean(align),
            [css[`justifyContent${ucfirst(justifyContent || '')}`]]: Boolean(
                justifyContent
            ),
            [css.fluid]: fluid,
            [css.seamless]: seamless,
            [css.centered]: centered,
        })}
        {...props}
    >
        {children}
    </Element>
);

export default Grid;
