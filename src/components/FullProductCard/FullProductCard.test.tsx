import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import FullProductCard from './FullProductCard';

const onCloseFunc = vi.fn();

describe('Full Product Card', () => {
  beforeEach(async () => {
    await act(() => render(<FullProductCard id={1} onClose={onCloseFunc} />));
  });

  it('should render product title', () => {
    expect(screen.getByText('First product')).toBeInTheDocument();
  });

  it('should render product description', () => {
    expect(screen.getByText(/Description of first product/)).toBeInTheDocument();
  });

  it('should render brand name', () => {
    expect(screen.getByText(/Brand name/)).toBeInTheDocument();
  });

  it('should render price', () => {
    expect(screen.getByText(/\$1111/)).toBeInTheDocument();
  });

  it('should render discount', () => {
    expect(screen.getByText(/11.11/)).toBeInTheDocument();
  });

  it('should render stock', () => {
    expect(screen.getByText(/100/)).toBeInTheDocument();
  });

  it('should render rating', () => {
    expect(screen.getByText(/★★★★★/)).toBeInTheDocument();
  });

  it('should render add to cart button', () => {
    expect(screen.getByRole('button', { name: /Add to cart/i })).toBeInTheDocument();
  });

  it('should render close card button', () => {
    expect(screen.getByRole('button', { name: /Close card/i })).toBeInTheDocument();
  });

  it('should call close function', async () => {
    const closeButton = screen.getByRole('button', { name: /Close card/i });
    await userEvent.click(closeButton);
    expect(onCloseFunc).toHaveBeenCalledTimes(1);
  });
});

test('Should render error message', async () => {
  await act(() => render(<FullProductCard id={404} onClose={onCloseFunc} />));
  expect(screen.getByText(/Something went wrong. Try again later/)).toBeInTheDocument();
});
