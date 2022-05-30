import React from 'react';
import './styles.scss';
import { ButtonProps } from './interface';
const Button: React.FC<ButtonProps | null> = ({
  children,
  backgroundColor,
  border,
  handleClick,
  disabled,
  icon,
  color,
  size,
  top,
}) => {
  const bg = backgroundColor ? 'bg-' + backgroundColor : 'bg-main';
  const db = disabled ? 'db' : '';
  const bd = border ? 'bd-' + border : '';
  const cl = color ? 'cl-' + color : '';
  const sz = size ? 'sz-' + size : '';

  return (
    <button
      className={`btn ${bg} ${bd} ${cl} ${sz} ${db} `}
      onClick={event => handleClick(event, 1)}
      style={{ marginTop: top }}
    >
      {icon ? (
        <div>
          <img srcSet={`${icon} 2x `} alt="" />
        </div>
      ) : (
        ''
      )}
      <div className="btn__txt">{children}</div>
    </button>
  );
};

export default Button;
