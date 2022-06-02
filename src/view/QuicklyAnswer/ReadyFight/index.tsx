import { arrow, choi, huy } from '@assets/images';
import AnimatedPage from '@view/AnimatedRouter/AnimatedPage';
import Button from '@view/Button';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import './styles.scss';
import { useState } from 'react';
const ReadyFight = () => {
  const history = useHistory();
  const [coundown, setCountDown] = useState(5);
  useEffect(() => {
    const timerId = setInterval(() => {
      setCountDown(prevState => prevState - 1);
    }, 1000);
    coundown === 2 ? history.push('./fight') : '';
    return () => clearInterval(timerId);
  });
  const handleFind = () => {
    history.push('/fight');
  };
  const handleBack = () => {
    history.push('/lixi');
  };
  return (
    <AnimatedPage>
      <div className="main-readyfight">
        <Button handleClick={handleBack} icon={arrow}></Button>
        <span className="main-readyfight__timer">00:{coundown}</span>
        <div className="main-readyfight__button">
          <Button handleClick={handleFind} icon={choi} size="medium" />
          <Button handleClick={handleFind} icon={huy} size="medium" primary top="15px" />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ReadyFight;
