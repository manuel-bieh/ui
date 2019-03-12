// @flow
import React from 'react';
import classNames from 'classnames';
import css from './Grid.module.css';
import { ucfirst } from '../utils';

type PropsT = {
    alignItems: 'start' | 'end' | 'center',
    center: boolean,
    children: any,
    className: string,
    el: any,
    justifyContent: 'start' | 'end' | 'center',
    style?: {},
    textAlign: 'left' | 'right' | 'center',
    // Available sizes
    xs: number | string,
    sm: number | string,
    md: number | string,
    lg: number | string,
    xl: number | string,
};

export default class Column extends React.PureComponent<PropsT> {
    render() {
        const {
            alignItems,
            className,
            children,
            justifyContent,
            el: Element = 'div',
            textAlign,
            ...props
        } = this.props;

        const { xs = 12, sm, md, lg, xl } = props;

        const sizeClass = classNames({
            [css[`colXs${xs}`]]: xs,
            [css[`colSm${sm}`]]: sm,
            [css[`colMd${md}`]]: md,
            [css[`colLg${lg}`]]: lg,
            [css[`colXl${xl}`]]: xl,
        });

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
    }
}
