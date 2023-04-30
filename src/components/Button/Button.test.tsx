import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('should render the button', () => {
    render(<Button title="Button" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Button')).toBeInTheDocument();
  });
});
