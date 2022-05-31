import React from 'react';
import './styles.scss';
import { GiftProp } from './interface';
const Gift = ({ item, index }: GiftProp) => {
  return (
    <div className="main-gift">
      {item.map((item: any, index: any) => (
        <div className="gift-item" key={index}>
          <img srcSet={`${item.img} 2x`} />
          <div className="gift-item__group">
            <span className="gift-item__number">Số lượng {item.quantity}</span>
            <span className="gift-item__state">
              Trạng thái:{' '}
              <div className={`${item.state ? 'active' : ''}`}>
                {item.state ? 'Đã nhận' : 'Chưa nhận'}
              </div>
            </span>
          </div>
        </div>
      ))}
      <div className="main-gift__total">
        {' '}
        Tổng số quà chưa nhận thưởng là <span>110</span>{' '}
      </div>
    </div>
  );
};

export default Gift;
