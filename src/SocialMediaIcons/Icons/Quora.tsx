import * as React from 'react';
import css from '../SocialMediaIcons.module.css';

const Quora = () => (
    <a href="https://www.quora.com/profile/Manuel-Bieh">
        <img
            alt="Logo: Quora"
            src={require('../../../assets/img/social-media/quora.svg')}
            className={css.icon}
        />{' '}
    </a>
);

export default Quora;
