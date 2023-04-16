import { screen, act } from '@testing-library/react';
import HomePage from './HomePage';
import renderWithProvider from '../../utils/RenderWithProvider';

describe('Home page', () => {
  it('should render search box', () => {
    renderWithProvider(<HomePage />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('should render loader', () => {
    renderWithProvider(<HomePage />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('should fetch products list', async () => {
    await act(() => renderWithProvider(<HomePage />));
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    expect(screen.getByText('First product')).toBeInTheDocument();
    expect(screen.getByText('Second product')).toBeInTheDocument();
  });
});
