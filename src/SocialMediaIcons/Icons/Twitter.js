import * as React from 'react';
import css from '../SocialMediaIcons.module.css';

const Twitter = () => (
    <a href="https://www.twitter.com/manuelbieh">
        <img
            src={require('../../../assets/img/social-media/twitter.svg')}
            className={css.icon}
        />{' '}
    </a>
);

export default Twitter;
