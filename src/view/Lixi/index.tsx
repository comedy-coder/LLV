import Button from '@view/Button';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import './styles.scss';
import { arrow, bxh, dhtt, dntlx, luatchoi, ttlx } from '@assets/images';
import { Context } from 'src/store/provider';

const Lixi = () => {
  const [state, dispatch] = useContext(Context);
  const history = useHistory();
  const handleBack = () => {
    history.push('/lxvhome');
  };
  const handleTetEvent = () => {
    history.push('/tetevent');
  };
  const handleQuicklyAnswer = () => {
    history.push('/quicklyanswer');
  };
  const handleRules = () => {
    history.push('/rules');
  };
  const handleLeader = () => {
    history.push('/leaderboard');
  };
  return (
    <div className="main-lixi">
      <Button icon={arrow} handleClick={handleBack} />
      <div className="main-lixi__buttongroup">
        <div className="main-lixi__buttongroup__title">
          Bạn đang có <span>{state.pushremaining}</span> lì xì
        </div>
        <Button icon={dntlx} size={'sxmm'} handleClick={handleQuicklyAnswer} />
        <Button icon={ttlx} size={'sxmm1'} handleClick={handleTetEvent}>
          12:00-13:00 | 18:00 - 20:00
        </Button>
        <Button icon={luatchoi} primary size={'sxmm'} handleClick={handleRules} />
        <Button icon={bxh} size={'sxmm'} primary handleClick={handleLeader} />
        <Button icon={dhtt} size={'sxmm1'} handleClick={handleBack}>
          12:00-13:00 | 18:00 - 20:00
        </Button>
      </div>
    </div>
  );
};

export default Lixi;
