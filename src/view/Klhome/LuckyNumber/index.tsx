import { qua1, qua2, qua3, qua4, qua5, qua6 } from '@assets/images';
import React, { useState } from 'react';
import BodyLucky from './BodyLucky';
import { LuckyNumberProps } from './inteface';
import './styles.scss';
const LuckyNumber = ({ item, index }: LuckyNumberProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const headerNav = ['Kì quay số 1 ', 'Kì quay số 2'];

  const item1 = [
    {
      img: qua1,
      state: false,
    },
    {
      img: qua2,
      state: true,
    },
    {
      img: qua3,
      state: true,
    },
    {
      img: qua4,
      state: true,
    },
    {
      img: qua5,
      state: false,
    },
    {
      img: qua6,
      state: true,
    },
  ];
  const item2 = [
    {
      img: qua1,
      state: true,
    },
    {
      img: qua2,
      state: true,
    },
    {
      img: qua3,
      state: false,
    },
    {
      img: qua4,
      state: true,
    },
    {
      img: qua5,
      state: false,
    },
    {
      img: qua6,
      state: false,
    },
  ];

  const bodyItem = [[...item1], [...item2]];
  return (
    <div className="main-luckynumber">
      <div className="main-luckynumber__header">
        {headerNav.map((item: any, index: any) => (
          <button
            className={`main-luckynumber__header__item ${activeIndex === index ? 'active' : ''}`}
            key={index}
            onClick={e => {
              setActiveIndex(index);
            }}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="main-luckynumber__body">
        {bodyItem.map((item, index) =>
          activeIndex === index ? <BodyLucky item={item} key={index} /> : '',
        )}
      </div>
    </div>
  );
};

export default LuckyNumber;
