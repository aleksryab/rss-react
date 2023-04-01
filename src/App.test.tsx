import { screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import renderWithRouter from './utils/RenderWithRouter';
import App from './App';
import mockFetch from './utils/mockFetch';

mockFetch();

describe('App', () => {
  it('should render h1', () => {
    renderWithRouter(<App />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toBeInTheDocument();
  });

  it('should router work', async () => {
    renderWithRouter(<App />);
    const homeLink = screen.getByTestId('home-link');
    const aboutLink = screen.getByTestId('about-link');

    expect(aboutLink).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();

    await userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });

  it('should render 404 page', () => {
    renderWithRouter(<App />, '/dkjfkl');
    expect(screen.getByTestId('404-page')).toBeInTheDocument();
  });
});
