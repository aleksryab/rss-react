import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

type HeaderProps = {
  title: string;
};

export class Header extends Component<HeaderProps> {
  render() {
    const { title } = this.props;

    return (
      <header className="header">
        <div className="container header__container">
          <h1 className="header__title">{title}</h1>
          <nav className="header__nav">
            <NavLink to="/" className="header__link" data-testid="home-link">
              Home
            </NavLink>
            <NavLink to="/about" className="header__link" data-testid="about-link">
              About Us
            </NavLink>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
