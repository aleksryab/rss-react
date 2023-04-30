import { render, screen } from '@testing-library/react';
import ProductsList from './ProductsList';
import { products } from '../../mocks/data';

describe('Products List', () => {
  it('should render product list', () => {
    render(<ProductsList products={products} />);
    expect(screen.getByText('First product')).toBeInTheDocument();
    expect(screen.getByText('Second product')).toBeInTheDocument();
  });

  test('should render Not found products message', () => {
    render(<ProductsList products={[]} />);
    expect(screen.getByText(/Products not found/)).toBeInTheDocument();
  });
});
