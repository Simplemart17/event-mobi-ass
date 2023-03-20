import { render, screen } from '@testing-library/react';
import GistLists from './GistLists';
import mockApiData from '../../utils/mockData';

test('renders gist lists component', async () => {
  const username = 'simple';

  render(<GistLists gists={mockApiData} username={username} />);
  const element = await screen.findAllByTestId("gistLists");

  expect(screen.getByRole('heading')).toHaveTextContent('The List of Public Gists')

  expect(element).toHaveLength(3);
});
