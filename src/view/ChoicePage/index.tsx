import { arrow, llv, lxv } from '@assets/images';
import Button from '@view/Button';
import React from 'react';
import { useHistory } from 'react-router';
import './styles.scss';
const ChoicePage = () => {
  const history = useHistory();
  const handleBack = () => {
    history.push('/');
  };
  return (
    <div className="main-choicepage">
      <div className="main-choicepage__position">
        <Button handleClick={handleBack} icon={arrow} />
      </div>
      <div className="main-choicepage__group">
        <Button size="large" handleClick={handleBack} icon={llv} />
        <Button size="large" handleClick={handleBack} icon={lxv} />
      </div>
    </div>
  );
};

export default ChoicePage;
