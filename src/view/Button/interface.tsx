import React from 'react';

export type ButtonProps = {
  backgroundColor?: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  border?: string;
  icon?: string;
  color?: string;
  size?: string;
};
