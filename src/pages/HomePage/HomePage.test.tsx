import { screen, act } from '@testing-library/react';
import HomePage from './HomePage';
import renderWithRouter from '../../utils/RenderWithRouter';

describe('Home page', () => {
  it('should render search box', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('should render loader', () => {
    renderWithRouter(<HomePage />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('should fetch products list', async () => {
    await act(() => renderWithRouter(<HomePage />));
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    expect(screen.getByText('First product')).toBeInTheDocument();
    expect(screen.getByText('Second product')).toBeInTheDocument();
  });
});
