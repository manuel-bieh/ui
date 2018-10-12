import * as React from 'react';
import { TEXTSIZES } from './constants';

declare module '@manuel-bieh/ui' {
    interface IconProps {
        color?: 'black' | 'white' | 'grey' | 'red';
        name: string;
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;
    }

    class Icon extends React.PureComponent<IconProps, any> {
        render(): React.Element;
    }

    function EventCard(props: { icon?: Icon; title: string }): React.Element;

    function Logo(props: { width?: number }): React.Element;

    function Text(props: {
        children: any;
        size: keyof TEXTSIZES;
        tagName: string;
    }): React.Element;
}
