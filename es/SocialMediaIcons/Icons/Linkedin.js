import * as React from 'react';
import css from '../SocialMediaIcons.module.css';
var Linkedin = function Linkedin() {
    return React.createElement(
        'a',
        { href: 'https://www.linkedin.com/in/manuelbieh/' },
        React.createElement('img', {
            alt: 'Logo: Linkedin',
            src: require('../../../assets/img/social-media/linkedin.svg'),
            className: css.icon,
        }),
        ' '
    );
};
export default Linkedin;
