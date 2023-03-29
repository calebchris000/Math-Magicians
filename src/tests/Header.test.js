import { render } from '@testing-library/react';
import Header from '../home/header';

test('renders a header with navigation links', () => {
  // Render the component
  const { getByText } = render(<Header />);

  // Check if the header element exists in the DOM
  const header = getByText('Math Magicians');
  expect(header).toBeInTheDocument();

  // Check if the navigation links exist in the DOM
  const homeLink = getByText('Home');
  const calculatorLink = getByText('Calculator');
  const quoteLink = getByText('Quote');
  expect(homeLink).toBeInTheDocument();
  expect(calculatorLink).toBeInTheDocument();
  expect(quoteLink).toBeInTheDocument();
});
