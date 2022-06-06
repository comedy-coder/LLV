import { arrow, huy } from '@assets/images';
import AnimatedPage from '@view/AnimatedRouter/AnimatedPage';
import Button from '@view/Button';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import './styles.scss';
import { useState } from 'react';
const Fightprotector = () => {
  const history = useHistory();

  const handleBack = () => {
    history.push('/lixi');
  };
  const handleNext = () => {
    history.push('/winprotector');
  };

  return (
    <AnimatedPage>
      <div className="main-fightprotector">
        <Button handleClick={handleBack} icon={arrow}></Button>
        <div className="main-fightprotector__group" onClick={handleNext}></div>
      </div>
    </AnimatedPage>
  );
};

export default Fightprotector;
