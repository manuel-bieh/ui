import * as React from 'react';
import css from '../SocialMediaIcons.module.css';
var Xing = function Xing() {
    return React.createElement(
        'a',
        { href: 'https://www.xing.com/profile/Manuel_Bieh' },
        React.createElement('img', {
            alt: 'Logo: Xing',
            src: require('../../../assets/img/social-media/xing.svg'),
            className: css.icon,
        }),
        ' '
    );
};
export default Xing;
