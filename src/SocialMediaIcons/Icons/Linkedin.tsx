import * as React from 'react';
import css from '../SocialMediaIcons.module.css';

const Linkedin = () => (
    <a href="https://www.linkedin.com/in/manuelbieh/">
        <img
            alt="Logo: Linkedin"
            src={require('../../../assets/img/social-media/linkedin.svg')}
            className={css.icon}
        />{' '}
    </a>
);

export default Linkedin;
