import * as React from 'react';
import techLogos from './logos';
import css from './TechLogos.module.css';
var TechLogos = function TechLogos() {
    return React.createElement(
        'section',
        { className: css.wrapper },
        techLogos.map(function(tech) {
            return React.createElement('img', {
                key: tech.name,
                alt: 'Logo: '.concat(tech.name),
                src: require('../../assets/img/tech/'.concat(tech)),
            });
        })
    );
};
export default TechLogos;
