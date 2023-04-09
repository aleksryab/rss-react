import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, vi } from 'vitest';
import SearchBar from './SearchBar';

describe('Search Bar', () => {
  const onSearchFunc = vi.fn();

  beforeEach(() => {
    render(<SearchBar onSearch={onSearchFunc} initialSearchText="" />);
  });

  it('should render search input', () => {
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('should change input value', async () => {
    const input = screen.getByRole('searchbox');
    expect(input).toBeInTheDocument();
    await userEvent.type(input, 'Search something');
    expect(input).toHaveValue('Search something');
  });
});
