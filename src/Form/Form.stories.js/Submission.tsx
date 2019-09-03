import React from 'react';
import Form from './../Form';
import Checkbox from './../Elements/Checkbox';
import Input from './../Elements/Input';
import Submit from './../Elements/Submit';
import { delay, ShowContext } from './helpers';

const validate = async ({ values }: any) => {
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
        onSubmit={async ({ resetValues }) => {
            await delay(1000);
            resetValues();
            alert('Alright, all done!');
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
