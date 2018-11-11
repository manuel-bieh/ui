import * as React from 'react';
import css from '../SocialMediaIcons.module.css';
var Quora = function Quora() {
    return React.createElement(
        'a',
        { href: 'https://www.quora.com/profile/Manuel-Bieh' },
        React.createElement('img', {
            alt: 'Logo: Quora',
            src: require('../../../assets/img/social-media/quora.svg'),
            className: css.icon,
        }),
        ' '
    );
};
export default Quora;
