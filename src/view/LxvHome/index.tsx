import Button from '@view/Button';
import React, { useContext, useEffect, useRef, useState } from 'react';
import './styles.scss';
import { arrow, dlx, tlx } from '@assets/images/index';
import { Context } from 'src/store/provider';
import './styles.scss';
import { useHistory } from 'react-router';

const LXVhome = () => {
  const history = useHistory();

  const [state, dispatch] = useContext(Context);

  const handleBack = () => {
    history.push('./choicepage');
  };
  const handleLLV = () => {
    history.push('./llvshake');
  };
  const handleNext = () => {
    history.push('./llvllct');
  };
  const hanldeLLCB = () => {
    history.push('./guide');
  };

  return (
    <div className="main-lxvhome">
      <Button icon={arrow} handleClick={handleBack} top="25px" />
      <div className="main-lxvhome__buttongroup">
        <div className="main-lxvhome__buttongroup__title">
          Bạn đang có <span>{state.pushremaining}</span> lì xì
        </div>
        <Button icon={tlx} size={'large'} handleClick={handleNext} />
        <Button icon={dlx} size={'large'} handleClick={hanldeLLCB} />
      </div>
    </div>
  );
};

export default LXVhome;
