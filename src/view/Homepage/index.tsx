import './style.scss';

import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router';

const Homepage = () => {
  const history = useHistory();
  const handleNext = () => {
    history.push('/dash');
  };
  return (
    <div className="homepage">
      <Button onClick={handleNext}> THAM GIA</Button>
    </div>
  );
};

export default Homepage;
