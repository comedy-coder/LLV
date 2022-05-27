import HeroSlider from '@view/Slider';
import React from 'react';
import { slide1, slide2, slide3, slide4 } from '@assets/images';
import './styles.scss';

const Guide = () => {
  const dataSlider = [
    {
      bg: slide1,
    },
    {
      bg: slide2,
    },
    {
      bg: slide3,
    },
    {
      bg: slide4,
    },
  ];
  return (
    <div className="main-guide">
      <HeroSlider data={dataSlider} control={true} />
    </div>
  );
};

export default Guide;
