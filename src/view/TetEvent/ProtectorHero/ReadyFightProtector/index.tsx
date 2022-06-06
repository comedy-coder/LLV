import { arrow, choi, huy } from '@assets/images';
import AnimatedPage from '@view/AnimatedRouter/AnimatedPage';
import Button from '@view/Button';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import './styles.scss';
import { useState } from 'react';
const Readyfightprotector = () => {
  const history = useHistory();
  const [coundown, setCountDown] = useState(5);
  useEffect(() => {
    const timerId = setInterval(() => {
      setCountDown(prevState => prevState - 1);
    }, 1000);
    coundown === 2 ? history.push('./fightprotector') : '';
    return () => clearInterval(timerId);
  });
  const handleFind = () => {
    history.push('/protectorfight');
  };
  const handleBack = () => {
    history.push('/lixi');
  };
  return (
    <AnimatedPage>
      <div className="main-readyfightprotector">
        <Button handleClick={handleBack} icon={arrow}></Button>
        <span className="main-readyfightprotector__timer">00:{coundown}</span>
        <div className="main-readyfightprotector__button">
          <Button handleClick={handleFind} icon={choi} size="medium" />
          <Button handleClick={handleFind} icon={huy} size="medium" primary top="15px" />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Readyfightprotector;
