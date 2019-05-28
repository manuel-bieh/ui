import * as React from 'react';
import css from '../SocialMediaIcons.module.css';

const Xing = () => (
    <a href="https://www.xing.com/profile/Manuel_Bieh">
        <img
            alt="Logo: Xing"
            src={require('../../../assets/img/social-media/xing.svg')}
            className={css.icon}
        />{' '}
    </a>
);

export default Xing;
