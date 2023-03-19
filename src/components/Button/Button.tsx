import React, { Component } from 'react';
import './Button.scss';

type ButtonProps = {
  title: string;
  icon?: React.ReactNode;
};

class Button extends Component<ButtonProps> {
  render() {
    const { title, icon } = this.props;

    return (
      <button className="button" type="button">
        {icon && <span className="button__icon">{icon}</span>}
        <span className="button__title">{title}</span>
      </button>
    );
  }
}

export default Button;
