import * as React from 'react';
import css from '../SocialMediaIcons.module.css';

const AngelList = () => (
    <a href="https://angel.co/manuelbieh">
        <img
            alt="Logo: AngelList"
            src={require('../../../assets/img/social-media/angellist.svg')}
            className={css.icon}
        />{' '}
    </a>
);

export default AngelList;
