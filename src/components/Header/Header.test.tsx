import { screen } from '@testing-library/react';
import Header from './Header';
import renderWithRouter from '../../utils/RenderWithRouter';

describe('Header', () => {
  it('should render title', () => {
    renderWithRouter(<Header title="Page" />);

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Page');
  });

  it('should render navigation', () => {
    renderWithRouter(<Header title="Page" />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
