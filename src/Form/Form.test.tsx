import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import Form from './Form';
import Field from './Elements/Field';
import Checkbox from './Elements/Checkbox';
import Textarea from './Elements/Textarea';
// import Submit from './Elements/Submit';

describe('Form', () => {
    it('renders a form', () => {
        const form = render(<Form onSubmit={jest.fn()}>Hallo</Form>);
        expect(form.container.firstChild).toMatchSnapshot();
    });

    it('renders a form with initial values', () => {
        const initialValues = {
            textField: 'textFieldHasText',
            checkbox: 'checkboxIsChecked',
            textarea: 'textareaHasText',
        };

        const form = render(
            <Form initialValues={initialValues} onSubmit={() => {}}>
                <Field name="textField" id="textField" />
                <Field name="otherTextField" id="otherTextField" />
                <Checkbox name="checkbox" value="checkboxIsChecked" />
                <Textarea name="textarea" id="textarea" />
            </Form>
        );

        expect(form.container.querySelector<HTMLInputElement>('#textField').value).toEqual(
            'textFieldHasText'
        );
        expect(form.container.querySelector<HTMLInputElement>('#otherTextField').value).toEqual('');
        expect(
            form.container.querySelector<HTMLInputElement>(
                '[name="checkbox"][value="checkboxIsChecked"]'
            ).checked
        ).toBe(true);
        expect(form.container.querySelector<HTMLTextAreaElement>('#textarea').value).toEqual(
            'textareaHasText'
        );
    });

    it('validates a form', async () => {
        const hasErrors = jest.fn(() => false);
        const submit = jest.fn();
        act(() => {
            const form = render(<Form validation={hasErrors} onSubmit={submit} id="form" />);

            fireEvent.submit(form.container.querySelector('#form'));
        });
        expect(await hasErrors).toHaveBeenCalled();
        expect(await submit).toHaveBeenCalled();
    });

    // TODO: mostly a test comment to test leasot integration with lint-staged
    // but while we're at it: you should really add more tests
});
