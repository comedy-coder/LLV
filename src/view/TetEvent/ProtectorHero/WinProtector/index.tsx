import { arrow, chiase, choi, huy, nhanloc, popupwin, xn } from '@assets/images';

import Button from '@view/Button';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import './styles.scss';
import { useState } from 'react';
import { Modal } from 'antd';
import AnimatedPage from '@view/AnimatedRouter/AnimatedPage';
const Winprotector = () => {
  const history = useHistory();

  const handleFind = () => {
    history.push('/lixi');
  };
  const handleBack = () => {
    history.push('/lixi');
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <AnimatedPage>
      <div className="main-winprotector">
        <Modal visible={isModalVisible}>
          <>
            <div className="button-position">
              <Button icon={xn} size={'large'} handleClick={() => setIsModalVisible(false)} />
            </div>
            <img srcSet={`${popupwin} 2x`} alt="" />
          </>
        </Modal>
        <Button handleClick={handleBack} icon={arrow}></Button>

        <div className="main-winprotector__button">
          <Button
            icon={nhanloc}
            handleClick={() => {
              setIsModalVisible(true);
            }}
            size="medium"
          />
          <Button handleClick={handleFind} icon={chiase} size="medium" top="15px" />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Winprotector;
