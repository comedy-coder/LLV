import React from 'react';
import { accesories } from './interface';
import './styles.scss';

const Accessories = ({ item, index, img1, img2 }: accesories) => {
  console.log(img1);
  return (
    <>
      <button className={`item1 ${index === 3 ? 'yellow' : ''}`}>{item[0]}</button>
      <button className={`item2 ${index === 0 ? 'brown' : ''}`}>
        {img1 ? <img srcSet={`${img1} 2x`} alt="" /> : item[1]}
      </button>
      <button className={`item3 ${index === 0 ? 'silver' : ''} ${index === 3 ? 'cu' : ''}`}>
        {img2 ? <img srcSet={`${img2} 2x`} alt="" /> : item[2]}
      </button>
    </>
  );
};

export default Accessories;
