// @flow
import React from 'react';
import classNames from 'classnames';
import css from './Grid.module.css';
import { ucfirst } from '../utils';

type PropsT = {
    align?: 'start' | 'end' | 'stretch' | 'center',
    centered?: boolean,
    children: any,
    className?: string,
    el: any,
    fluid: boolean,
    justifyContent?: 'start' | 'end' | 'center',
    seamless?: boolean,
    textAlign?: 'left' | 'right' | 'center',
};
export default function Row({
    align,
    centered,
    children,
    className,
    el: Element = 'div',
    justifyContent,
    fluid,
    seamless,
    textAlign = 'left',
    ...props
}: PropsT) {
    return (
        <Element
            className={classNames(
                css.grid,
                textAlign && css[`textAlign${ucfirst(textAlign)}`],
                align && css[`align${ucfirst(align)}`],
                justifyContent &&
                    css[`justifyContent${ucfirst(justifyContent)}`],
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
}
