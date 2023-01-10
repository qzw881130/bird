import { render, screen } from '@testing-library/react';
import MyApp from '../MyApp';

test('Play', () => {
  render(<MyApp />);
  const linkElement = screen.getByText(/Play/i);
  expect(linkElement).toBeInTheDocument();
});
