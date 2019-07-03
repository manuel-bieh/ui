import * as React from 'react';
import classNames from 'classnames';
import techLogos from './logos';
import css from './TechLogos.module.css';

type PropsT = {
    className?: string;
};

const TechLogos = ({ className }: PropsT) => (
    <section className={classNames(css.wrapper, className)}>
        {techLogos.map((tech) => (
            <img
                key={tech}
                alt={`Logo: ${tech}`}
                className={`tech-logo--${tech}`}
                src={require(`../assets/img/tech/${tech}`)}
            />
        ))}
    </section>
);

export default TechLogos;
