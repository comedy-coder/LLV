import React from 'react';
import { circle, man } from '../../shared/assets/images';

import './styles.scss';
const Dash = () => {
  return (
    <div className="main-dash">
      <img srcSet={`${circle} 2x`} alt="" />
      <img srcSet={`${man} 2x`} alt="" />
    </div>
  );
};

export default Dash;
