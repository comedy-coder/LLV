import { arrow, nextbtn, prev, rule1, rule2 } from '@assets/images';
import AnimatedPage from '@view/AnimatedRouter/AnimatedPage';
import Button from '@view/Button';
import React from 'react';
import { useHistory } from 'react-router';
import './styles.scss';
import { HeroSliderProps, HeroSliderItemProps } from './interface';
import { useState, useCallback } from 'react';
const Rules = () => {
  const history = useHistory();
  const handleBack = () => {
    history.push('./lixi');
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const data = [
    {
      img: rule1,
    },
    {
      img: rule2,
    },
  ];
  const nextSlide = useCallback(() => {
    const index = activeIndex + 1 === data.length ? 0 : activeIndex + 1;
    setActiveIndex(index);
  }, [setActiveIndex, data]);

  const prevSlide = () => {
    const index = activeIndex - 1 < 0 ? data.length - 1 : activeIndex - 1;
    setActiveIndex(index);
  };

  return (
    <AnimatedPage>
      <div className="main-rules">
        <Button icon={arrow} handleClick={() => handleBack()} top="20px" />
        <div className="main-rules__body">
          <div className="hero-slider__rules">
            {data.map((item, index) => (
              <HeroSliderItem key={index} active={index === activeIndex} item={item} />
            ))}

            <div className="hero-slider__rules__control">
              <div className="hero-slider__rules__control__item" onClick={prevSlide}>
                <img srcSet={`${prev} 2x `} alt="" />
              </div>
              <div className="hero-slider__rules__control__item">
                <div className="index">
                  {activeIndex + 1}/{data.length}
                </div>
              </div>
              <div className="hero-slider__rules__control__item" onClick={nextSlide}>
                <img srcSet={`${nextbtn} 2x `} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

const HeroSliderItem = ({ item, active }: HeroSliderItemProps) => {
  return (
    <div className={`hero-slider__rules__item ${active ? 'active' : ''}`}>
      <img srcSet={`${item.img} 2x`} alt="" />
    </div>
  );
};
export default Rules;
