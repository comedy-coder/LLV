import './style.scss';
import { bgmain, text } from '@assets/images';
import React from 'react';
import Button from '../Button';
import { useHistory } from 'react-router';

const Homepage = () => {
  const history = useHistory();
  const handleNext = () => {
    history.push('/charecter');
  };
  return (
    <div className="homepage">
      <img srcSet={`${bgmain} 2x`} alt="" className="bg-image" />
      <Button handleClick={handleNext} icon={text} size={'special'} />
    </div>
  );
};

export default Homepage;
