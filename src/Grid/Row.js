// @flow
import React from 'react';
import classNames from 'classnames';
import css from './Grid.module.css';
import { ucfirst } from '../utils';

type PropsT = {
    align?: 'start' | 'end' | 'stretch' | 'center',
    justifyContent?: 'start' | 'end' | 'center',
    children: *,
    className?: string,
    tagName: *,
    textAlign?: 'left' | 'right' | 'center',
};
export default function Row({
    tagName: TagName = 'div',
    children,
    className,
    align,
    justifyContent,
    textAlign = 'left',
    ...props
}: PropsT) {
    return (
        <TagName
            className={classNames(
                css.row,
                textAlign && css[`textAlign${ucfirst(textAlign)}`],
                align && css[`align${ucfirst(align)}`],
                justifyContent &&
                    css[`justifyContent${ucfirst(justifyContent)}`],
                className
            )}
            {...props}
        >
            {children}
        </TagName>
    );
}
