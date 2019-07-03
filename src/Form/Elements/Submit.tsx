// @flow
import * as React from 'react';
import { Consumer } from '../context';

export const Submit = (props: any) => (
    <Consumer>{({ submit }) => <button type="button" {...props} onClick={submit} />}</Consumer>
);

export default Submit;
