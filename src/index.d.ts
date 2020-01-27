import * as React from 'react';
import { TEXTSIZES } from './constants';

declare module '@manuel-bieh/ui' {
    declare interface IconProps {
        color?: 'black' | 'white' | 'grey' | 'red';
        name: string;
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
    }

    declare class Icon extends React.PureComponent<IconProps, any> {
        render(): React.Element;
    }

    declare function EventCard(props: { icon?: Icon; title: string }): React.Element;

    declare function Logo(props: { width?: number }): React.Element;

    declare function Text(props: {
        children: any;
        // size: keyof TEXTSIZES;
        tagName: string;
    }): React.Element;
}
