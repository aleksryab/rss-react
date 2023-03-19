import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('Search Bar', () => {
  it('should render search input', () => {
    render(<SearchBar />);
    expect(screen.getAllByRole('textbox')).toBeInTheDocument;
  });

  it('should change input value', async () => {
    render(<SearchBar />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    await userEvent.type(input, 'Search something');
    expect(input).toHaveValue('Search something');
  });
});
