import Button from '@view/Button';
import React, { useContext, useEffect, useRef, useState } from 'react';
import './styles.scss';
import { arrow, caymai, cloundllvhome, lc, llcb, llv, llvtext } from '@assets/images';
import { Context } from 'src/store/provider';
import { UserSelector } from '@modules/authentication/profileStore';
import { useHistory } from 'react-router';

import { pushedButton } from 'src/store/action';
import { useDispatch, useSelector } from 'react-redux';

const LlvHome = () => {
  const { user } = useSelector(UserSelector);
  const dispatch1 = useDispatch();
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [state, dispatch] = useContext(Context);
  const [isLogIn, setisLogin] = useState(true);

  useEffect(() => {
    let count = JSON.parse(localStorage.getItem('count') || '');
    console.log(user?.userFullName);
    if (count < 2) {
      setIsModalVisible(true);
      localStorage.setItem('count', '3');
    } else setIsModalVisible(false);
  }, []);
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
  const hanldeCloseModal = () => {
    setIsModalVisible(false);
    dispatch(pushedButton(state.pushremaining + 1));
  };
  return (
    <div className="main-llvhome">
      <Button icon={arrow} handleClick={handleBack} top="25px" />
      <div className="main-llvhome__text">
        <img srcSet={`${llvtext} 2x`} alt="" />
      </div>
      <div className="main-llvhome__tree">
        <img srcSet={`${caymai} 2x`} alt="" />
      </div>

      <div className="main-llvhome__buttongroup">
        <Button icon={llv} size={'xm'} handleClick={handleLLV}>
          còn {state.pushremaining} lượt
        </Button>
        <Button icon={llcb} size={'large'} handleClick={handleNext} />
        <Button icon={lc} size={'large'} handleClick={hanldeLLCB} />
      </div>
      <div className="main-llvhome__clound">
        <img srcSet={`${cloundllvhome} 2x`} alt="" />
      </div>
    </div>
  );
};

export default LlvHome;
