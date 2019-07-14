import React from 'react';
import { render } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
    it('renders a form', () => {
        const form = render(<Form>Hallo</Form>);
        expect(form.container.firstChild).toMatchSnapshot();
    });
});
