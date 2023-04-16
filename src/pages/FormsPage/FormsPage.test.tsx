import { screen } from '@testing-library/react';
import FormsPage from './FormsPage';
import renderWithProvider from '../../utils/RenderWithProvider';

describe('Forms Page', () => {
  beforeEach(() => {
    renderWithProvider(<FormsPage />, '/forms');
  });

  it('should render forms page', () => {
    expect(screen.getByTestId('forms-page')).toBeInTheDocument();
  });

  it('should render the form', () => {
    expect(screen.getByRole('form')).toBeInTheDocument();
  });
});
