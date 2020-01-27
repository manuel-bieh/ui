import React from 'react';
import Form from './../Form';
import Checkbox from './../Elements/Checkbox';
import Input from './../Elements/Input';
import Submit from './../Elements/Submit';
import { delay, ShowContext } from './helpers';

const validate = async ({ values }: any) => {
    console.log('validation', values);
    await delay(2500);

    const errors: any = {};

    if (values.terms !== '1') {
        errors.terms = 'Please accept the terms';
    }

    return errors;
};

export default () => (
    <Form
        validation={validate}
        id="validatedForm"
        onSubmit={(data) => {
            console.log(data);
        }}
    >
        <p>
            <label>
                <Checkbox name="terms" value="1" /> Newsletter 1
            </label>
        </p>
        <Input name="text" />
        <Submit>Send</Submit>
        <ShowContext />
    </Form>
);
