import * as React from 'react';
import FormContext from '../context';

export const Submit = (props: any) => {
    const { submit } = React.useContext(FormContext);
    return <button type="button" {...props} onClick={submit} />;
};

export default Submit;
