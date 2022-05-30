import Button from '@view/Button';
import React, { useContext, useEffect, useRef, useState } from 'react';
import './styles.scss';
import { arrow, dlx, tlx } from '@assets/images/index';
import { Context } from 'src/store/provider';
import './styles.scss';
import { useHistory } from 'react-router';

const KLhome = () => {
  const history = useHistory();
  const [activeIndex, setActiveIndex] = useState(0);

  const headerNav = [
    {
      text: 'Lắc lộc vàng',
    },
    {
      text: 'Lì xì vàng',
    },
    {
      text: 'Mã số may mắn',
    },
  ];
  const handleBack = () => {
    history.push('./choicepage');
  };

  return (
    <div className="main-klhome">
      <Button icon={arrow} handleClick={handleBack} top="25px" />
      <div className="main-klhome__header">
        {headerNav.map((item: any, index: any) => (
          <button
            className={`main-klhome__header__item ${activeIndex === index ? 'active' : ''}`}
            key={index}
            onClick={e => {
              setActiveIndex(index);
            }}
          >
            {item.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KLhome;
