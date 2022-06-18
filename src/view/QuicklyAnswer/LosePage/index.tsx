import { arrow,  xn } from '@assets/images';
import AnimatedPage from '@view/AnimatedRouter/AnimatedPage';
import Button from '@view/Button';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import './styles.scss';

const Losepage = () => {
  const history = useHistory();

  const handleFind = () => {
    history.push('/fight');
  };
  const handleBack = () => {
    history.push('/lixi');
  };

  return (
    <AnimatedPage>
      <div className="main-losepage">
        <Button handleClick={handleBack} icon={arrow}></Button>

        <div className="main-losepage__button">
          <Button handleClick={handleFind} icon={xn} size="medium" top="15px" />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Losepage;
