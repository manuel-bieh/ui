import * as React from 'react';
import clientLogos from './logos';
import css from './ClientLogos.module.css';

const ClientLogos = () => (
    <section className={css.wrapper}>
        {clientLogos.map((client) => (
            <img
                alt={`Logo: ${client.name}`}
                key={client.name}
                src={require(`../assets/img/clients/${client.image}`)}
            />
        ))}
    </section>
);

export default ClientLogos;
