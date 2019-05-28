import * as React from 'react';
import css from '../SocialMediaIcons.module.css';

const Github = () => (
    <a href="https://www.github.com/manuelbieh">
        <img
            alt="Logo: Github"
            src={require('../../../assets/img/social-media/github.svg')}
            className={css.icon}
        />{' '}
    </a>
);

export default Github;
