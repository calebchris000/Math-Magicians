import React from 'react';
import { render } from '@testing-library/react';
import Body from '../home/body';

describe('Body Component', () => {
  test('renders without error', () => {
    const { getByText } = render(<Body />);
    const firstParagraph = getByText(/React is a popular JavaScript library/i);
    const secondParagraph = getByText(/Building a calculator with React offers/i);

    expect(firstParagraph).toBeInTheDocument();
    expect(secondParagraph).toBeInTheDocument();
  });

  test('renders a section element with the class name "bodySection"', () => {
    const { container } = render(<Body />);
    const sectionElement = container.querySelector('section.bodySection');

    expect(sectionElement).toBeInTheDocument();
  });
});
