import React from 'react';
import './styles.scss';
import { useContext } from 'react';
import { Context } from 'src/store/provider';
import Button from '../Button/index';
import { arrow, l10l, l1l } from '@assets/images';
import { useHistory } from 'react-router';
import { pushedButton } from 'src/store/action';
import AnimatedPage from '@view/AnimatedRouter/AnimatedPage';
const LLVShake = () => {
  const [state, dispatch] = useContext(Context);
  const history = useHistory();
  const handleBack = () => {
    history.push('./llvhome');
  };
  const handlel1l = () => {
    if (state.pushremaining > 0) dispatch(pushedButton(state.pushremaining - 1));
    else if (state.pushremaining === 0)
      dispatch(pushedButton((state.pushremaining = Math.floor(Math.random() * 100))));
  };
  const handlel10l = (e: any) => {
    if (state.pushremaining > 10) dispatch(pushedButton(state.pushremaining - 10));
    else if (state.pushremaining < 0)
      dispatch(pushedButton((state.pushremaining = Math.floor(Math.random() * 100))));
    else if (state.pushremaining === 10) dispatch(pushedButton(state.pushremaining - 10));
  };
  return (
    <AnimatedPage>
      <div
        className={`main-llvshake ${state.pushremaining > 10 ? 'bg-1 active' : ''} ${
          state.pushremaining === 10 ? 'bg-2 active' : ''
        } ${state.pushremaining < 10 ? 'bg-3 active' : ''} ${
          state.pushremaining === 0 ? 'bg-4 active' : ''
        }`}
      >
        <Button icon={arrow} handleClick={handleBack} />
        <div className="main-llvshake__buttongroup">
          <span>
            {' '}
            Bạn có <span className="main-llvshake__sll">{state.pushremaining}</span> lượt{' '}
          </span>

          {state.pushremaining > 0 ? (
            <Button icon={l1l} size={'large'} handleClick={handlel1l} />
          ) : (
            <Button icon={l1l} size={'large'} disabled handleClick={handlel1l} />
          )}
          {state.pushremaining > 9 ? (
            <Button icon={l10l} size={'large'} handleClick={e => handlel10l(e)} />
          ) : (
            <Button icon={l10l} size={'large'} disabled handleClick={e => handlel10l(e)} />
          )}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default LLVShake;
