import React from 'react';
import './styles.scss';
import { ButtonProps } from './interface';
const Button: React.FC<ButtonProps | null> = ({
  children,
  backgroundColor,
  border,
  handleClick,
  icon,
  color,
  size,
}) => {
  const bg = backgroundColor ? 'bg-' + backgroundColor : 'bg-main';
  const bd = border ? 'bd-' + border : '';
  const cl = color ? 'cl-' + color : '';
  const sz = size ? 'sz-' + size : '';
  return (
    <button className={`btn ${bg} ${bd} ${cl} ${sz}`} onClick={event => handleClick(event, 1)}>
      {icon ? <img srcSet={`${icon} 2x `} alt="" /> : ''}
      <span className="btn__txt">{children}</span>
    </button>
  );
};

export default Button;
