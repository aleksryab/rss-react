import React, { Component } from 'react';
import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: React.ReactNode;
}

class Button extends Component<ButtonProps> {
  render() {
    const { title, icon, className, ...props } = this.props;

    return (
      <button className={`button ${className}`} {...props}>
        {icon && <span className="button__icon">{icon}</span>}
        <span className="button__title">{title}</span>
      </button>
    );
  }
}

export default Button;
