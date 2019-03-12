// @flow
import React from 'react';
import classNames from 'classnames';
import css from './Grid.module.css';
import { ucfirst } from '../utils';

// import css from 'css/layout/Grid.scss';

type PropsT = {
    tagName: string,
    children: any,
    className: string,
    style: {},
    center: boolean,
    box: boolean,
    textAlign: 'left' | 'right' | 'center',
    alignItems: 'start' | 'end' | 'center',
    justifyContent: 'start' | 'end' | 'center',
    variant: 'color' | 'light',
    size: number | string,
    xs: number | string,
    sm: number | string,
    md: number | string,
    lg: number | string,
    xl: number | string,
    xsmall: number | string,
    small: number | string,
    medium: number | string,
    large: number | string,
    xlarge: number | string,
};

export default class Column extends React.PureComponent<PropsT> {
    render() {
        const { columnClassName } = this.context;
        const {
            alignItems,
            box,
            className,
            children,
            justifyContent,
            tagName: TagName = 'div',
            textAlign,
            ...props
        } = this.props;

        const { xs = 12, sm, md, lg, xl } = props;

        const {
            'pad-xs': padXs,
            'pad-sm': padSm,
            'pad-md': padMd,
            'pad-lg': padLg,
            'pad-xl': padXl,
        } = props;

        const sizeClass = classNames({
            [css[`colXs${xs}`]]: xs,
            [css[`colSm${sm}`]]: sm,
            [css[`colMd${md}`]]: md,
            [css[`colLg${lg}`]]: lg,
            [css[`colXl${xl}`]]: xl,
        });

        const padClass = classNames({
            [css[`colXsPad${padXs}`]]: typeof padXs !== 'undefined',
            [css[`colSmPad${padSm}`]]: typeof padSm !== 'undefined',
            [css[`colMdPad${padMd}`]]: typeof padMd !== 'undefined',
            [css[`colLgPad${padLg}`]]: typeof padLg !== 'undefined',
            [css[`colXlPad${padXl}`]]: typeof padXl !== 'undefined',
        });

        return (
            <TagName
                className={classNames(
                    css.col,
                    sizeClass,
                    padClass,
                    columnClassName,
                    textAlign && css[`textAlign${ucfirst(textAlign)}`],
                    alignItems && css[`alignItems${ucfirst(alignItems)}`],
                    justifyContent &&
                        css[`justifyContent${ucfirst(justifyContent)}`],
                    box && css.box,
                    className
                )}
            >
                {children}
            </TagName>
        );
    }
}
