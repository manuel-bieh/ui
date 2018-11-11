import * as React from 'react';
import clientLogos from './logos';
import css from './ClientLogos.module.css';
var ClientLogos = function ClientLogos() {
    return React.createElement(
        'section',
        { className: css.wrapper },
        clientLogos.map(function(client) {
            return React.createElement('img', {
                alt: 'Logo: '.concat(client.name),
                key: client.name,
                src: require('../../assets/img/clients/'.concat(client.image)),
            });
        })
    );
};
export default ClientLogos;
