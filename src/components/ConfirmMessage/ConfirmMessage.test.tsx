import { render, screen } from '@testing-library/react';
import ConfirmMessage from './ConfirmMessage';

describe('Forms Page', () => {
  beforeEach(() => {
    render(<ConfirmMessage onClose={() => {}} />);
  });

  it('should render confirm message', () => {
    expect(screen.getByText('The data has been saved!')).toBeInTheDocument();
  });
});
