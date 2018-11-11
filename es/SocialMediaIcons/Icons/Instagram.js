import * as React from 'react';
import css from '../SocialMediaIcons.module.css';
var Instagram = function Instagram() {
    return React.createElement(
        'a',
        { href: 'https://www.instagram.com/manuelbieh/' },
        React.createElement('img', {
            alt: 'Logo: Instagram',
            src: require('../../../assets/img/social-media/instagram.svg'),
            className: css.icon,
        }),
        ' '
    );
};
export default Instagram;
