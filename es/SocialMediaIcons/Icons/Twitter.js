import * as React from 'react';
import css from '../SocialMediaIcons.module.css';
var Twitter = function Twitter() {
    return React.createElement(
        'a',
        { href: 'https://www.twitter.com/manuelbieh' },
        React.createElement('img', {
            alt: 'Logo: Twitter',
            src: require('../../../assets/img/social-media/twitter.svg'),
            className: css.icon,
        }),
        ' '
    );
};
export default Twitter;
