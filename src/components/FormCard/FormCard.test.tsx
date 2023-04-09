import { render, screen } from '@testing-library/react';
import FormCard from './FormCard';

const data = {
  firstName: 'John',
  lastName: 'Doe',
  birthday: '1999-06-03',
  country: 'Some Country',
  gender: 'male',
  avatar: 'https://i.pravatar.cc/300?img=3',
  subscribe: true,
  policy: true,
};

describe('Form Card', () => {
  beforeEach(() => {
    render(<FormCard cardInfo={data} />);
  });

  it('should render avatar img', () => {
    expect(screen.getByAltText(`${data.firstName} ${data.lastName}`)).toHaveAttribute(
      'src',
      data.avatar
    );
  });

  it('should render full name', () => {
    expect(screen.getByText(`${data.firstName} ${data.lastName}`)).toBeInTheDocument();
  });

  it('should render birthday', () => {
    expect(screen.getByText(data.birthday)).toBeInTheDocument();
  });

  it('should render location', () => {
    expect(screen.getByText(data.country)).toBeInTheDocument();
  });

  it('should render gender', () => {
    expect(screen.getByText(`${data.gender} student`)).toBeInTheDocument();
  });

  it('should render subscribe option', () => {
    expect(screen.getByText(`Subscription to notifications`)).toBeInTheDocument();
  });
});
