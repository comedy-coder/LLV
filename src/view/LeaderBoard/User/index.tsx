import React from 'react';
import './styles.scss';
import { userProp } from './interface';
const User = ({ item, index }: userProp) => {
  return (
    <div className="main-user">
      {item.map((item: any, index: any) => (
        <div className="user-item" key={index}>
          <img srcSet={`${item.img} 2x`} />
          <div className="user-item__group">
            <span className="user-item__number">Số lượng {item.quantity}</span>
            <span className="user-item__state">
              Trạng thái:{' '}
              <div className={`${item.state ? 'active' : ''}`}>
                {item.state ? 'Đã nhận' : 'Chưa nhận'}
              </div>
            </span>
          </div>
        </div>
      ))}
      <div className="main-user__total">
        {' '}
        Tổng số quà chưa nhận thưởng là <span>110</span>{' '}
      </div>
    </div>
  );
};

export default User;
