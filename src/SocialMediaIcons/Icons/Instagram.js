import * as React from 'react';
import css from '../SocialMediaIcons.module.css';

const Instagram = () => (
    <a href="https://www.instagram.com/manuelbieh/">
        <img
            src={require('../../../assets/img/social-media/instagram.svg')}
            className={css.icon}
        />{' '}
    </a>
);

export default Instagram;
