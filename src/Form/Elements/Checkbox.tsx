// @flow
import * as React from 'react';
import { Consumer } from '../context';
import Field from './Field';

const Checkbox = ({ element: Element = Field, name, value, ...props }: any) => (
    <Consumer>
        {({ values, onChange }) => (
            <Element
                {...props}
                name={name}
                value={value || 'on'}
                type="checkbox"
                checked={
                    value
                        ? (values[name] || []).includes(value)
                        : ['on', true].includes(values[name])
                }
                onChange={onChange}
            />
        )}
    </Consumer>
);

export default Checkbox;
