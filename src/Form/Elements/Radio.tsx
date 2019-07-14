import * as React from 'react';
import FormContext from '../context';
import Field from './Field';

const Radio = ({ as: Element = Field, name, value, ...props }: any) => {
    const { values, onChange } = React.useContext(FormContext);
    return (
        <Element
            {...props}
            name={name}
            value={value}
            type="radio"
            checked={values[name] === value}
            onChange={onChange}
        />
    );
};

export default Radio;
