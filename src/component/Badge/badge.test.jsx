import { render, screen } from '@testing-library/react';
import Badge from './Badge';

test('renders search bar component', () => {
  render(<Badge />);
  const element = screen.getAllByTestId("badge");

  expect(element).toHaveLength(1)
});
