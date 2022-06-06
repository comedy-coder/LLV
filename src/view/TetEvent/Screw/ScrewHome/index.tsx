import { arrow, tdt } from '@assets/images';
import AnimatedPage from '@view/AnimatedRouter/AnimatedPage';
import Button from '@view/Button';
import React from 'react';
import { useHistory } from 'react-router';
import './styles.scss';
const Screwhome = () => {
  const history = useHistory();
  const handleFind = () => {
    history.push('/findingenemyscrew');
  };
  const handleBack = () => {
    history.push('/');
  };
  return (
    <AnimatedPage>
      <div className="main-screwhome">
        <Button handleClick={handleBack} icon={arrow}></Button>
        <div className="main-screwhome__button">
          <Button handleClick={handleFind} icon={tdt} size="medium" />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Screwhome;
