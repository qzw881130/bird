import { render, screen } from '@testing-library/react';
import App from '../App';

test('d', () => {
  render(<App />);
  const linkElement = screen.getByText(/d/i);
  expect(linkElement).toBeInTheDocument();
});
