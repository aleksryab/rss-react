import { screen } from '@testing-library/react';
import renderWithRouter from '../../utils/RenderWithRouter';
import FormsPage from './FormsPage';

describe('Forms Page', () => {
  beforeEach(() => {
    renderWithRouter(<FormsPage />);
  });

  it('should render forms page', () => {
    expect(screen.getByTestId('forms-page')).toBeInTheDocument();
  });
});
