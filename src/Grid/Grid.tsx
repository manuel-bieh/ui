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
        className={classNames(
            css.grid,
            textAlign && css[`textAlign${ucfirst(textAlign)}`],
            align && css[`align${ucfirst(align)}`],
            justifyContent && css[`justifyContent${ucfirst(justifyContent)}`],
            className,
            {
                [css.fluid]: fluid,
                [css.seamless]: seamless,
                [css.centered]: centered,
            }
        )}
        {...props}
    >
        {children}
    </Element>
);

export default Grid;
