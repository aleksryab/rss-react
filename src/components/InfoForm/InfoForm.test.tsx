import { render, screen } from '@testing-library/react';
import InfoForm from './InfoForm';

const handleSubmit = () => {};

describe('Info Form', () => {
  beforeEach(() => {
    render(<InfoForm onSubmit={handleSubmit} />);
  });

  it('should render full name input with label', () => {
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('name', 'fullName');
  });

  it('should render country select with label', () => {
    expect(screen.getByLabelText('Location')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toHaveAttribute('name', 'country');
  });

  it('should render birthday date picker with label', () => {
    expect(screen.getByLabelText('Birthday')).toBeInTheDocument();
  });

  it('should render avatar image picker with label', () => {
    expect(screen.getByLabelText('Upload avatar')).toBeInTheDocument();
  });

  it('should render male gender radio button', () => {
    expect(screen.getByLabelText('Male')).toBeInTheDocument();
  });

  it('should render female gender radio button', () => {
    expect(screen.getByLabelText('Female')).toBeInTheDocument();
  });

  it('should render subscription checkbox', () => {
    expect(
      screen.getByRole('checkbox', {
        name: 'I want to receive notifications about promo, sales, etc.',
      })
    ).toBeInTheDocument();
  });

  it('should render policy confirm checkbox', () => {
    expect(
      screen.getByRole('checkbox', {
        name: 'I consent to the processing of my personal data.',
      })
    ).toBeInTheDocument();
  });

  it('should render submit button', () => {
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });
});
