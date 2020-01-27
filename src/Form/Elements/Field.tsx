import * as React from 'react';
// import { Consumer } from '../context';
import FormContext from '../context';

const Field = ({
    as: Element = 'input',
    onChange: customOnChange,
    name,
    value,
    resetErrorStateOnFocus,
    ...props
}: any) => {
    const { onChange, onFocus, isSubmitting, isValidating, resetError, values } = React.useContext(
        FormContext
    );
    return (
        <Element
            {...props}
            disabled={isValidating || isSubmitting}
            name={name}
            value={value || values[name] || ''}
            onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                if (typeof onFocus === 'function') {
                    onFocus(e);
                }
                if (resetErrorStateOnFocus) {
                    resetError(name);
                }
            }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (
                    typeof customOnChange === 'function' &&
                    // Don't call customOnChange function if it's the same as the
                    // Form component's default onChange handler to not call it twice
                    customOnChange !== onChange
                ) {
                    customOnChange(e);
                }
                onChange(e);
            }}
        />
    );
};

export default React.memo(Field);
