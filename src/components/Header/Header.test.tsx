import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  it('should render title', () => {
    render(
      <MemoryRouter>
        <Header title="Page" />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Page');
  });

  it('should render navigation', () => {
    render(
      <MemoryRouter>
        <Header title="Page" />
      </MemoryRouter>
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
