import * as React from 'react';
// import { Consumer } from '../context';
import FormContext from '../context';

const Field = ({
    element: Element = 'input',
    onChange: customOnChange,
    name,
    value,
    resetErrorStateOnFocus,
    ...props
}: any) => {
    const {
        onChange,
        isSubmitting,
        isValidating,
        resetError,
        values,
    } = React.useContext(FormContext);
    return (
        <Element
            {...props}
            disabled={isValidating || isSubmitting}
            name={name}
            value={value || values[name] || ''}
            onFocus={(e) => {
                if (typeof props.onFocus === 'function') {
                    props.onFocus(e);
                }
                if (resetErrorStateOnFocus) {
                    resetError(name);
                }
            }}
            onChange={(e) => {
                if (typeof customOnChange === 'function') {
                    customOnChange(e);
                }
                onChange(e);
            }}
        />
    );
};
// const Field = ({
//     element: Element = 'input',
//     onChange: customOnChange,
//     name,
//     value,
//     resetErrorStateOnFocus,
//     ...props
// }: any) => (
//     <Consumer>
//         {({ onChange, isSubmitting, isValidating, resetError, values }) => (
//             <Element
//                 {...props}
//                 disabled={isValidating || isSubmitting}
//                 name={name}
//                 value={value || values[name] || ''}
//                 onFocus={(e) => {
//                     if (typeof props.onFocus === 'function') {
//                         props.onFocus(e);
//                     }
//                     if (resetErrorStateOnFocus) {
//                         resetError(name);
//                     }
//                 }}
//                 onChange={(e) => {
//                     if (typeof customOnChange === 'function') {
//                         customOnChange(e);
//                     }
//                     onChange(e);
//                 }}
//             />
//         )}
//     </Consumer>
// );

// export default Field;
export default React.memo(Field);
