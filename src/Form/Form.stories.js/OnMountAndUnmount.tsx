import React from 'react';
import Form from './../Form';
import Checkbox from './../Elements/Checkbox';
import Input from './../Elements/Input';
import {
    ShowValues,
    restoreValuesFromLocalStorage,
    storeValuesInLocalStorage,
} from './helpers';

export default () => (
    <Form
        id="mount-unmount"
        onSubmit={(...data) => {
            console.log(data);
        }}
        onMount={restoreValuesFromLocalStorage}
        onUnmount={storeValuesInLocalStorage}
        initialValues={{
            text: 'hello!',
            notif: ['messages'],
            'notifications[alerts]': 'on',
        }}
    >
        <p>
            <label>
                <Checkbox name="notifications[alerts]" /> notifications[alerts]
            </label>
        </p>
        <p>
            <label>
                <Checkbox name="notifications[messages]" />{' '}
                notifications[messages]
            </label>
        </p>
        <p>
            <label>
                <Checkbox name="notifications[other]" value="1" />{' '}
                notifications[other] = 1
            </label>
        </p>
        <Input name="text" />
        <input type="submit" />
        <ShowValues />
    </Form>
);
