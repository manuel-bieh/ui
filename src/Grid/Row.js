// @flow
import React from 'react';
import classNames from 'classnames';
import css from './Grid.module.css';

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
                textAlign && css[`text-align--${textAlign}`],
                align && css[`align--${align}`],
                justifyContent && css[`justify-content--${justifyContent}`],
                className
            )}
            {...props}
        >
            {children}
        </TagName>
    );
}
