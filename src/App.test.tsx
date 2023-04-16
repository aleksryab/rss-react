import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithProvider from './utils/RenderWithProvider';
import App from './App';

describe('App', () => {
  it('should render home page', () => {
    renderWithProvider(<App />);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });

  it('should render about page', () => {
    renderWithProvider(<App />, '/about');
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });

  it('should render forms page', () => {
    renderWithProvider(<App />, '/forms');
    expect(screen.getByTestId('forms-page')).toBeInTheDocument();
  });

  it('should render 404 page', () => {
    renderWithProvider(<App />, '/dkjfkl');
    expect(screen.getByTestId('404-page')).toBeInTheDocument();
  });

  it('should router work', async () => {
    renderWithProvider(<App />);
    const homeLink = screen.getByTestId('home-link');
    const aboutLink = screen.getByTestId('about-link');

    expect(aboutLink).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();

    await userEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });
});
