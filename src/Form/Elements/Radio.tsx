// @flow
import * as React from 'react';
import { Consumer } from '../context';
// import Field from './Field';

const Radio = ({ element: Element = 'input', name, value, ...props }: any) => (
    <Consumer>
        {({ onChange, values }) => (
            <Element
                {...props}
                name={name}
                value={value}
                type="radio"
                checked={values[name] === value}
                onChange={onChange}
            />
        )}
    </Consumer>
);

export default Radio;
