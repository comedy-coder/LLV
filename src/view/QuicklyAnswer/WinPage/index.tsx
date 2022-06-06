import { arrow, chiase, choi, huy, nhanloc, popupwin, xn } from '@assets/images';
import AnimatedPage from '@view/AnimatedRouter/AnimatedPage';
import Button from '@view/Button';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import './styles.scss';
import { useState } from 'react';
import { Modal } from 'antd';
import { Context } from 'src/store/provider';
import { pushedButton } from 'src/store/action';
const Winpage = () => {
  const history = useHistory();
  const [state, dispatch] = useContext(Context);
  const handleFind = () => {
    history.push('/lixi');
  };
  const handleBack = () => {
    history.push('/lixi');
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <AnimatedPage>
      <div className="main-winpage">
        <Modal visible={isModalVisible}>
          <>
            <div className="button-position">
              <Button icon={xn} size={'large'} handleClick={() => setIsModalVisible(false)} />
            </div>
            <img srcSet={`${popupwin} 2x`} alt="" />
          </>
        </Modal>
        <Button handleClick={handleBack} icon={arrow}></Button>

        <div className="main-winpage__button">
          <Button
            icon={nhanloc}
            handleClick={() => {
              setIsModalVisible(true);
              dispatch(pushedButton(state.pushremaining + 1));
            }}
            size="medium"
          />
          <Button handleClick={handleFind} icon={chiase} size="medium" top="15px" />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Winpage;
