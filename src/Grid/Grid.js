// @flow
import React from 'react';
import classNames from 'classnames';
import css from './Grid.module.css';

type PropsT = {
    tagName?: string,
    centered?: boolean,
    children: any,
    className?: string,
    fluid: boolean,
    seamless?: boolean,
    style?: {},
};

export default class Grid extends React.Component<PropsT> {
    render() {
        const {
            centered,
            children,
            className,
            fluid,
            seamless,
            style,
            tagName: TagName = 'div',
        } = this.props;

        const classes = classNames(css.grid, className, {
            [css.fluid]: fluid,
            [css.seamless]: seamless,
            [css.centered]: centered,
        });

        return (
            <TagName className={classes} style={style}>
                {children}
            </TagName>
        );
    }
}
