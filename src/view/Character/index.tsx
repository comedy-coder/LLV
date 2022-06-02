import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {
  arrow,
  circle,
  clound,
  dao,
  kinh1,
  kinh2,
  mai,
  man,
  Text1,
  tree,
  bgbottom,
} from '../../shared/assets/images';
import Accessories from './accessoriesgroup';
import { rau1, rau2 } from '../../shared/assets/images';
import './styles.scss';
import Button from '@view/Button';
import AnimatedPage from '@view/AnimatedRouter/AnimatedPage';
const Charecter = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const Chosen = [
    {
      display: 'Tóc',
      value: 0,
    },
    {
      display: 'Râu',
      value: 1,
    },
    {
      display: 'Kính',
      value: 2,
    },
    {
      display: 'Da',
      value: 3,
    },
  ];
  const accessories = [
    {
      display: ['đen', 'nâu', 'bạc'],
      value: 0,
    },
    {
      display: ['không'],
      value: 1,
      img2: rau1,
      img1: rau2,
    },
    {
      display: ['không'],
      value: 2,
      img1: kinh1,
      img2: kinh2,
    },
    {
      display: ['vàng', 'trắng', 'ngâm'],
      value: 3,
    },
  ];
  const history = useHistory();
  const handleBack = () => {
    history.push('/');
  };
  const handleNext = () => {
    history.push('/guide');
  };

  const handleChosen = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <AnimatedPage>
      <div className="main-charecter">
        <div className="main-charecter__header">
          <Button icon={arrow} handleClick={handleBack} />

          <h3>TẠO NHÂN VẬT</h3>
          <h2>LÊN ĐỒ LẮC LỘC NÀO ANH EM ƠI!</h2>
          <span>Anh em đã sẵn sàng lắc lộc chưa,</span>
          <span>lên đồ ngay nhé!</span>
        </div>
        <div className="main-charecter__body">
          <img srcSet={`${bgbottom} 2x`} alt="" className="main-charecter__body__bgbt" />
          <img srcSet={`${circle} 2x`} alt="" className="main-charecter__body__circle" />
          <img srcSet={`${clound} 2x`} alt="" className="main-charecter__body__clound" />
          <img srcSet={`${man} 2x`} alt="" className="main-charecter__body__man" />
          <img srcSet={`${tree} 2x`} alt="" className="main-charecter__body__tree" />
          <img srcSet={`${mai} 2x`} alt="" className="main-charecter__body__mai" />
          <img srcSet={`${dao} 2x`} alt="" className="main-charecter__body__dao" />
        </div>
        <div className="main-charecter__chosen-group">
          {Chosen.map((item, index) => (
            <button
              key={index}
              className={`main-charecter__button ${item.value === activeIndex ? 'active' : ''}`}
              onClick={e => {
                handleChosen(index);
              }}
            >
              {item.display}
            </button>
          ))}
        </div>
        <div className="main-charecter__accessoriesgroup">
          {accessories.map((item, index) =>
            activeIndex === item.value ? (
              <Accessories
                key={index}
                item={item.display}
                index={index}
                img1={item.img1}
                img2={item.img2}
              />
            ) : (
              ''
            ),
          )}
        </div>
        <Button handleClick={handleNext} icon={Text1} size={'medium'} />
      </div>
    </AnimatedPage>
  );
};

export default Charecter;
