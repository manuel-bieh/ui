import * as React from 'react';
import techLogos from './logos';
import css from './TechLogos.module.css';

const TechLogos = () => (
    <section className={css.wrapper}>
        {techLogos.map((tech) => (
            <img
                key={tech.name}
                alt={`Logo: ${tech.name}`}
                src={require(`../../assets/img/tech/${tech}`)}
            />
        ))}
    </section>
);

export default TechLogos;
