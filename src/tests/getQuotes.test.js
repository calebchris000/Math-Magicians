import { render, screen } from '@testing-library/react';
import CommentSpace from '../components/getQuotes';

describe('CommentSpace component', () => {
  test('renders loading message while fetching data', () => {
    render(<CommentSpace />);
    const loadingElement = screen.getByText('Loading quotes...');
    expect(loadingElement).toBeInTheDocument();
  });

  test('renders loading message', async () => {
    render(<CommentSpace />);

    const loadingMessage = await screen.findByText('Loading quotes...');
    expect(loadingMessage).toBeInTheDocument();
  });

  test('renders error message', async () => {
    // Mock the fetch function to simulate a failed API call
    global.fetch = jest.fn().mockImplementation(() => Promise.reject(new Error('API call failed')));

    render(<CommentSpace />);

    const errorMessage = await screen.findByText(/Sorry, an error occurred/);
    expect(errorMessage).toBeInTheDocument();

    // Clean up the mock after the test is done
    global.fetch.mockClear();
    delete global.fetch;
  });
});
