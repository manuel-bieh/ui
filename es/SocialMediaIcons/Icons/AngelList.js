import * as React from 'react';
import css from '../SocialMediaIcons.module.css';
var AngelList = function AngelList() {
    return React.createElement(
        'a',
        { href: 'https://angel.co/manuelbieh' },
        React.createElement('img', {
            alt: 'Logo: AngelList',
            src: require('../../../assets/img/social-media/angellist.svg'),
            className: css.icon,
        }),
        ' '
    );
};
export default AngelList;
