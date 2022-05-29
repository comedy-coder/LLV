import Button from '@view/Button';
import React, { useContext } from 'react';
import './styles.scss';
import { arrow, lc, llcb, llv } from '@assets/images';
import { Context } from 'src/store/provider';

import { useHistory } from 'react-router';

const LlvHome = () => {
  const history = useHistory();

  const [state, dispatch] = useContext(Context);
  const handleBack = () => {
    history.push('./choicepage');
    // if (state.pushremaining > 0) dispatch(pushedButton(state.pushremaining - 1));
    // else if (state.pushremaining === 0) dispatch(pushedButton((state.pushremaining = 11)));
  };
  const handleNext = () => {
    history.push('./llvshake');
  };
  const hanldeLLCB = () => {};
  return (
    <div className="main-llvhome">
      <Button icon={arrow} handleClick={handleBack} />
      <div className="main-llvhome__buttongroup">
        <Button icon={llv} size={'xm'} handleClick={handleNext}>
          còn {state.pushremaining} lượt
        </Button>
        <Button icon={llcb} size={'large'} handleClick={hanldeLLCB} />
        <Button icon={lc} size={'large'} handleClick={hanldeLLCB} />
      </div>
    </div>
  );
};

export default LlvHome;
