import * as React from 'react';
import FormContext from '../context';
import Field from './Field';

const Checkbox = ({ as: Element = Field, name, value, ...props }: any) => {
    const { values, onChange } = React.useContext(FormContext);
    return (
        <Element
            {...props}
            name={name}
            value={value || 'on'}
            type="checkbox"
            checked={
                value ? (values[name] || []).includes(value) : ['on', true].includes(values[name])
            }
            onChange={onChange}
        />
    );
};

export default Checkbox;
