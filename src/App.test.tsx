import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './utils/RenderWithRouter';
import mockFetch from './utils/mockFetch';
import App from './App';

mockFetch();

describe('App', () => {
  it('should render home page', () => {
    renderWithRouter(<App />);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  it('should render about page', () => {
    renderWithRouter(<App />, '/about');
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });

  it('should render forms page', () => {
    renderWithRouter(<App />, '/forms');
    expect(screen.getByTestId('forms-page')).toBeInTheDocument();
  });

  it('should render 404 page', () => {
    renderWithRouter(<App />, '/dkjfkl');
    expect(screen.getByTestId('404-page')).toBeInTheDocument();
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
});
