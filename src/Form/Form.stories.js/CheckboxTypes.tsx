import React from 'react';
import Form from './../Form';
import Checkbox from './../Elements/Checkbox';
import Input from './../Elements/Input';
import { ShowValues } from './helpers';

const initialValues = {
    'array[second]': 'on',
    'shared-name': ['1', '2', '3'],
    'array[first]': 'on',
    'second-unique-name': '1',
    'first-unique-name': '1',
    'third-unique-name': true,
    'array[third]': '1',
};

export default () => (
    <Form
        id="checkbox-types"
        onSubmit={(data) => {
            console.log(data);
        }}
        initialValues={initialValues}
    >
        <p>
            <label>
                <Checkbox name="first-unique-name" value="1" />{' '}
                first-unique-name=1
            </label>
        </p>
        <p>
            <label>
                <Checkbox name="second-unique-name" value="1" />{' '}
                second-unique-name=1
            </label>
        </p>
        <p>
            <label>
                <Checkbox name="third-unique-name" /> third-unique-name=
            </label>
        </p>
        <p>
            <label>
                <Checkbox name="shared-name" value="1" /> shared-name=1
            </label>
        </p>
        <p>
            <label>
                <Checkbox name="shared-name" value="2" /> shared-name=2
            </label>
        </p>
        <p>
            <label>
                <Checkbox name="shared-name" value="3" /> shared-name=3
            </label>
        </p>
        <p>
            <label>
                <Checkbox name="array[first]" /> array[first]=
            </label>
        </p>
        <p>
            <label>
                <Checkbox name="array[second]" /> array[second]=
            </label>
        </p>
        <p>
            <label>
                <Checkbox name="array[third]" value="1" /> array[third]=1
            </label>
        </p>
        <Input name="text" />
        <input type="submit" />
        <table>
            <tr>
                <td>Initial Values</td>
                <td>Values</td>
            </tr>
            <tr>
                <td>
                    <pre>{JSON.stringify(initialValues, null, 2)}</pre>
                </td>
                <td>
                    <ShowValues />
                </td>
            </tr>
        </table>
    </Form>
);
