import React from 'react';
import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: React.ReactNode;
}

function Button({ title, icon, className, ...props }: ButtonProps) {
  return (
    <button className={`button ${className ?? ''}`} {...props}>
      {icon && <span className="button__icon">{icon}</span>}
      <span className="button__title">{title}</span>
    </button>
  );
}

export default Button;
