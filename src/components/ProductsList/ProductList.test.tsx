import { render, screen } from '@testing-library/react';
import ProductsList from './ProductsList';
import { products } from '../../utils/data';

describe('Products List', () => {
  it('should render product list', () => {
    render(<ProductsList products={products} />);
    expect(screen.getByText('iPhone 9')).toBeInTheDocument();
    expect(screen.getByText('iPhone X')).toBeInTheDocument();
  });

  test('should render Not found products message', () => {
    render(<ProductsList products={[]} />);
    expect(screen.getByText(/Products not found/)).toBeInTheDocument();
  });

  // it('should load products list', async () => {
  //   await act(async () => render(<ProductsList />));
  //   expect(screen.getByText('iPhone 9')).toBeInTheDocument();
  // });
});
