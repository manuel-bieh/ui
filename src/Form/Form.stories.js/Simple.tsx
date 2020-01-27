import React from 'react';
import Form from './../Form';
import Checkbox from './../Elements/Checkbox';
import Input from './../Elements/Input';
import { ShowValues } from './helpers';

export default () => (
    <Form
        id="exampleForm"
        onSubmit={(data) => {
            console.log(data);
        }}
    >
        <p>
            <label>
                <Checkbox name="newsletter1" value="1" /> Newsletter 1
            </label>
        </p>
        <p>
            <label>
                <Checkbox name="newsletter2" value="2" /> Newsletter 2
            </label>
        </p>
        <p>
            <label>
                <Checkbox name="notif" value="alerts" /> notif = alerts
            </label>
        </p>
        <p>
            <label>
                <Checkbox name="notif" value="news" /> notif = news
            </label>
        </p>
        <p>
            <label>
                <Checkbox name="notif" value="messages" /> notif = messages
            </label>
        </p>
        <p>
            <label>
                <Checkbox name="notifications[alerts]" /> notifications[alerts]
            </label>
        </p>
        <p>
            <label>
                <Checkbox name="notifications[messages]" /> notifications[messages]
            </label>
        </p>
        <p>
            <label>
                <Checkbox name="notifications[other]" value="1" /> notifications[other] = 1
            </label>
        </p>
        <Input name="text" />
        <input type="submit" />
        <ShowValues />
    </Form>
);
