import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';
import ContactForm from '..';

afterEach(cleanup);


describe('ContactForm component', () => {
    it('renders', () => {
        render(<ContactForm />);
    });

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('h1 textContent is visible', () => {
    it('populates header with text', () => {
        const { getByTestId } = render(<ContactForm />);

        expect(getByTestId('header')).toHaveTextContent('Contact me');
    });

    
});
