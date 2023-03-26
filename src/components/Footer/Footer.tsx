import React, { Component } from 'react';
import { ReactComponent as GithubIcon } from '../../assets/github-icon.svg';
import './Footer.scss';

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container container">
          <div>
            <a href="https://github.com/aleksryab" className="author-link">
              <span className="author-link__icon">
                <GithubIcon />
              </span>
              <span className="author-link__text">aleksryab</span>
            </a>
          </div>
          <div>2023</div>
          <div>
            <a href="https://rs.school/react/" className="school-link">
              <span className="school-link__text">Rolling Scopes School</span>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
