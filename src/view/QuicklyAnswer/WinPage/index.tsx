import { arrow, chiase, choi, huy, nhanloc } from '@assets/images';
import AnimatedPage from '@view/AnimatedRouter/AnimatedPage';
import Button from '@view/Button';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import './styles.scss';
import { useState } from 'react';
const Winpage = () => {
  const history = useHistory();

  const handleFind = () => {
    history.push('/fight');
  };
  const handleBack = () => {
    history.push('/lixi');
  };
  return (
    <AnimatedPage>
      <div className="main-winpage">
        <Button handleClick={handleBack} icon={arrow}></Button>

        <div className="main-winpage__button">
          <Button handleClick={handleFind} icon={nhanloc} size="medium" />
          <Button handleClick={handleFind} icon={chiase} size="medium" primary top="15px" />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Winpage;
