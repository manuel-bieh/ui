import * as React from 'react';
import techLogos from './logos';
import css from './TechLogos.module.css';

const TechLogos = () => (
    <section className={css.wrapper}>
        {techLogos.map((tech) => (
            <img
                key={tech}
                alt={`Logo: ${tech}`}
                src={require(`../../assets/img/tech/${tech}`)}
            />
        ))}
    </section>
);

export default TechLogos;
