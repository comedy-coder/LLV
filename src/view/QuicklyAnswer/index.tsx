import { arrow, tdt } from '@assets/images';
import AnimatedPage from '@view/AnimatedRouter/AnimatedPage';
import Button from '@view/Button';
import React from 'react';
import { useHistory } from 'react-router';
import './styles.scss';
const QuicklyAnswer = () => {
  const history = useHistory();
  const handleFind = () => {
    history.push('/findingenemy');
  };
  const handleBack = () => {
    history.push('/');
  };
  return (
    <AnimatedPage>
      <div className="main-quicklyanswer">
        <Button handleClick={handleBack} icon={arrow}></Button>
        <div className="main-quicklyanswer__button">
          <Button handleClick={handleFind} icon={tdt} size="medium" />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default QuicklyAnswer;
