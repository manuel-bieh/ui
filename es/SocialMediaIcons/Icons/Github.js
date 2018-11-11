import * as React from 'react';
import css from '../SocialMediaIcons.module.css';
var Github = function Github() {
    return React.createElement(
        'a',
        { href: 'https://www.github.com/manuelbieh' },
        React.createElement('img', {
            alt: 'Logo: Github',
            src: require('../../../assets/img/social-media/github.svg'),
            className: css.icon,
        }),
        ' '
    );
};
export default Github;
