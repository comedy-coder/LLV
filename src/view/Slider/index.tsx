import { next, playnow, test } from '@assets/images';
import Button from '@view/Button';
import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router';
import { arrow } from '@assets/images';
import { HeroSliderProps, HeroSliderItemProps } from './interface';
import './styles.scss';
const HeroSlider = ({ data, control }: HeroSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const history = useHistory();
  const handleChosen = (index: any) => {
    setActiveIndex(index);
  };
  const handleNext = () => {
    activeIndex > 2 ? setActiveIndex(0) : setActiveIndex(activeIndex + 1);
    activeIndex === 3 ? history.push('/choicepage') : setActiveIndex(activeIndex + 1);
  };

  const handleBack = () => {
    history.push('/');
  };

  const Chosen = [
    {
      value: 0,
    },
    {
      value: 1,
    },
    {
      value: 2,
    },
    {
      value: 3,
    },
  ];

  return (
    <div className="hero-slider">
      <div className="hero-slider__button1">
        <Button icon={arrow} handleClick={handleBack} />
      </div>
      <span className="hero-slider__title">Hướng dẫn</span>
      {data.map((item, index) => (
        <HeroSliderItem key={index} active={index === activeIndex} item={item} />
      ))}

      {control ? (
        <div className="hero-slider__chosen-group">
          {Chosen.map((item, index) => (
            <button
              key={index}
              className={`hero-slider__button ${item.value === activeIndex ? 'active' : ''}`}
              onClick={e => {
                handleChosen(index);
              }}
            ></button>
          ))}
        </div>
      ) : null}
      <div className="hero-slider__position">
        <Button
          icon={activeIndex === 3 ? playnow : next}
          handleClick={handleNext}
          size={'medium'}
        />
      </div>
    </div>
  );
};

const HeroSliderItem = ({ item, active }: HeroSliderItemProps) => {
  console.log(item.desc);
  return (
    <div className={`hero-slider__item ${active ? 'active' : ''}`}>
      <img srcSet={`${item.bg} 2x`} alt="" />

      <div className={`hero-slider__box ${active ? 'active' : ''}`}>
        <p> {item.desc} </p>
      </div>
    </div>
  );
};

export default HeroSlider;
