import { arrow, huy } from '@assets/images';
import AnimatedPage from '@view/AnimatedRouter/AnimatedPage';
import Button from '@view/Button';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import './styles.scss';
import { useState } from 'react';
const Fight = () => {
  const history = useHistory();
  const [activeIndex, setActiveIndex] = useState<null | any>(null);
  const timerId = () => {
    setTimeout(() => {
      history.push('./winner');
    }, 1000);
  };
  const timerId1 = () => {
    setTimeout(() => {
      history.push('./loser');
    }, 1000);
  };
  const checkAnser = (index: any) => {
    if (index === 2) {
      timerId();
      return 'correct';
    } else timerId1();
    return 'incorrect';
  };

  const itemAnswer = [
    {
      value: 1,
      display: '1 Lớp',
    },
    {
      value: 2,
      display: '2 Lớp',
    },
    {
      value: 3,
      display: '3 Lớp',
    },
    {
      value: 4,
      display: '4 Lớp',
    },
  ];
  const handleBack = () => {
    history.push('/lixi');
  };

  return (
    <AnimatedPage>
      <div className="main-fight">
        <Button handleClick={handleBack} icon={arrow}></Button>
        <div className="main-fight__group">
          {itemAnswer.map((item, index) => (
            <button
              onClick={() => {
                setActiveIndex(index);
              }}
              key={index}
              className={`main-fight__answer ${activeIndex === index ? checkAnser(index) : ''}`}
            >
              {item.display}
            </button>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Fight;
