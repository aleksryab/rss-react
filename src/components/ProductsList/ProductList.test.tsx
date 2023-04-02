import { act, render, screen } from '@testing-library/react';
import ProductsList from './ProductsList';
import mockFetch from '../../utils/mockFetch';

mockFetch();

describe('Products List', () => {
  it('should render preloader', () => {
    render(<ProductsList />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should load products list', async () => {
    await act(async () => render(<ProductsList />));
    expect(screen.getByText('iPhone 9')).toBeInTheDocument();
  });
});
