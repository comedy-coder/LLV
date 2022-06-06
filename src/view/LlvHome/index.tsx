import Button from '@view/Button';
import React, { useContext, useEffect, useRef, useState } from 'react';
import './styles.scss';
import {
  arrow,
  caymai,
  lc,
  llcb,
  llv,
  llvtext,
  mayphaui,
  maytrai,
  popupsk,
  popupxn,
  tvk,
  xn,
} from '@assets/images';
import { Context } from 'src/store/provider';

import { useHistory } from 'react-router';
import { Modal } from 'antd';
import { stringify } from 'querystring';
import { pushedButton } from 'src/store/action';

const LlvHome = () => {
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [state, dispatch] = useContext(Context);
  const [isLogIn, setisLogin] = useState(true);

  useEffect(() => {
    let count = JSON.parse(localStorage.getItem('count') || '');
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
      <Modal visible={isModalVisible}>
        {isLogIn ? (
          <>
            <div className="button-position">
              <Button icon={tvk} size={'large'} handleClick={() => setisLogin(false)} />
            </div>
            <img srcSet={`${popupsk} 2x`} alt="" />
          </>
        ) : (
          <>
            <div className="button-position1">
              <Button icon={xn} size={'large'} handleClick={hanldeCloseModal} />
            </div>
            <img srcSet={`${popupxn} 2x`} alt="" />
          </>
        )}
      </Modal>
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
    </div>
  );
};

export default LlvHome;
