import { arrow, llv, lxv } from '@assets/images';
import AnimatedPage from '@view/AnimatedRouter/AnimatedPage';
import Button from '@view/Button';
import React from 'react';
import { useHistory } from 'react-router';
import './styles.scss';
const ChoicePage = () => {
  const history = useHistory();
  const handleBack = () => {
    history.push('/');
  };
  const handlelxv = () => {
    history.push('/lxvhome');
  };
  const handleNext = () => {
    history.push('/llvhome');
  };
  return (
    <AnimatedPage>
      <div className="main-choicepage">
        <div className="main-choicepage__position">
          <Button handleClick={handleBack} icon={arrow} />
        </div>
        <div className="main-choicepage__group">
          <Button size="large" handleClick={handleNext} icon={llv} />
          <Button size="large" handleClick={handlelxv} icon={lxv} />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ChoicePage;
