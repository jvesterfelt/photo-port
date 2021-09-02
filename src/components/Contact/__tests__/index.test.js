import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);


describe('ContactForm component', () => {
    it('renders', () => {
        render(<Contact />);
    });

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    });
});

it('renders', () => {
  const { getByTestId } = render(<Contact />)
  expect(getByTestId('header')).toHaveTextContent('Contact me')
})

it('renders', () => {
  const { getByTestId } = render(<Contact />)
  expect(getByTestId('button')).toHaveTextContent('Submit')
})