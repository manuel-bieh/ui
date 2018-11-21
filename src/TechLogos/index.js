// @flow
import * as React from 'react';
import techLogos from './logos';
import css from './TechLogos.module.css';
import classNames from 'classnames';

type PropsT = {
    className?: string,
};

const TechLogos = ({ className }: PropsT) => (
    <section className={classNames(css.wrapper, className)}>
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
