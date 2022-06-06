import Button from '@view/Button';
import React, { useContext, useEffect, useRef, useState } from 'react';
import './styles.scss';
import {
  arrow,
  dlx,
  mcv,
  ncv,
  phm100k,
  phm200k,
  phm500k,
  phm50k,
  pkVT,
  tinh,
} from '@assets/images/index';

import './styles.scss';
import { useHistory } from 'react-router';

import User from './User';

const Leaderboard = () => {
  const history = useHistory();
  const [activeIndex, setActiveIndex] = useState(0);

  const headerNav = [
    {
      text: 'Tỉnh',
    },
    {
      text: 'Toàn quốc',
    },
    {
      text: 'Chung kết',
    },
  ];

  const Gifts = [
    {
      type: 'pkVT',
      quantity: 5,
      state: false,
      img: pkVT,
    },
    {
      type: 'mcv',
      quantity: 3,
      state: true,
      img: mcv,
    },
    {
      type: 'ncv',
      quantity: 4,
      state: true,
      img: ncv,
    },
  ];
  const Gifts1 = [
    {
      type: 'pmh500k',
      quantity: 5,
      state: false,
      img: phm500k,
    },
    {
      type: 'pmh100k',
      quantity: 5,
      state: true,
      img: phm100k,
    },
    {
      type: 'pmh200k',
      quantity: 5,
      state: true,
      img: phm50k,
    },
  ];
  const bodyState = [{ content: [...Gifts] }, { content: [...Gifts1] }];
  const handleBack = () => {
    history.push('./choicepage');
  };

  return (
    <div className="main-leaderboard">
      <Button icon={arrow} handleClick={handleBack} top="25px" />
      <div className="main-leaderboard__header">
        {headerNav.map((item: any, index: any) => (
          <button
            className={`main-leaderboard__header__item ${activeIndex === index ? 'active' : ''}`}
            key={index}
            onClick={e => {
              setActiveIndex(index);
            }}
          >
            {' '}
            {item.text}
          </button>
        ))}
      </div>
      <div
        className={`main-leaderboard__body ${activeIndex === 1 ? 'bg-toanquoc' : ''} ${
          activeIndex === 2 ? 'bg-chungket' : ''
        } `}
      ></div>
    </div>
  );
};

export default Leaderboard;
