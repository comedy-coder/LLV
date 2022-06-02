import { arrow, huy } from '@assets/images';
import AnimatedPage from '@view/AnimatedRouter/AnimatedPage';
import Button from '@view/Button';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import './styles.scss';
import { useState } from 'react';
const Findingenemy = () => {
  const history = useHistory();
  const [coundown, setCountDown] = useState(15);
  useEffect(() => {
    const timerId = setInterval(() => {
      setCountDown(prevState => prevState - 1);
    }, 1000);
    coundown === 12 ? history.push('./readyfight') : '';
    return () => clearInterval(timerId);
  });

  const handleBack = () => {
    history.push('/lixi');
  };
  return (
    <AnimatedPage>
      <div className="main-findingenemy">
        <Button handleClick={handleBack} icon={arrow}></Button>
        <span className="main-findingenemy__timer">00:{coundown}</span>
        <div className="main-findingenemy__button">
          <Button handleClick={handleBack} icon={huy} size="medium" primary />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Findingenemy;
