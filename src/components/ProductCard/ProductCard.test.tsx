import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

const data = {
  id: 1,
  title: 'iPhone 9',
  description: 'An apple mobile which is nothing like apple',
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: 'Apple',
  category: 'smartphones',
  thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  images: [
    'https://i.dummyjson.com/data/products/1/1.jpg',
    'https://i.dummyjson.com/data/products/1/2.jpg',
    'https://i.dummyjson.com/data/products/1/3.jpg',
    'https://i.dummyjson.com/data/products/1/4.jpg',
    'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  ],
};

describe('Product Card', () => {
  it('should render the card', () => {
    render(<ProductCard product={data} />);
    expect(screen.getByTestId('product-card')).toBeInTheDocument();
  });

  it('should render title', () => {
    render(<ProductCard product={data} />);
    expect(screen.getByText(data.title)).toBeInTheDocument();
  });

  it('should render category', () => {
    render(<ProductCard product={data} />);
    expect(screen.getByText(data.category)).toBeInTheDocument();
  });

  it('should render price', () => {
    render(<ProductCard product={data} />);
    expect(screen.getByText(`$${data.price}`)).toBeInTheDocument();
  });

  it('should render image', () => {
    render(<ProductCard product={data} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByAltText(data.title)).toBeInTheDocument();
  });

  it('should render add to cart button', () => {
    render(<ProductCard product={data} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
