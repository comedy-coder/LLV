import Button from '@view/Button';
import React, { useContext, useEffect, useRef, useState } from 'react';
import './styles.scss';
import { ahsbv, arrow, dlx, tak, tlx, ttbv } from '@assets/images/index';
import { Context } from 'src/store/provider';
import './styles.scss';
import { useHistory } from 'react-router';
import AnimatedPage from '@view/AnimatedRouter/AnimatedPage';

const Tetevent = () => {
  const history = useHistory();

  const [state, dispatch] = useContext(Context);

  const handleBack = () => {
    history.push('./choicepage');
  };

  const handleNext = () => {
    history.push('./screwhome');
  };
  const hanldeLLCB = () => {
    history.push('./protectorhome');
  };

  return (
    <AnimatedPage>
      <div className="main-tetevent">
        <Button icon={arrow} handleClick={handleBack} top="25px" />
        <div className="main-tetevent__buttongroup">
          <Button icon={ttbv} size={'sxmm'} handleClick={handleNext} />
          <Button icon={ahsbv} size={'sxmm1'} handleClick={hanldeLLCB}>
            Ra mắt vào ngày 08/11
          </Button>
          <Button icon={tak} size={'sxmm1'} handleClick={handleNext}>
            Ra mắt vào ngày 08/11
          </Button>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Tetevent;
