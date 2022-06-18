import React from 'react';
import './styles.scss';
import { BodyProps } from './interface';
const BodyLucky = ({ item }: BodyProps) => {
  return (
    <div className="main-bodylucky">
        
      {item.map((item: any, index: any) => (
        <div className="bodylucky-item" key={index}>
          <img srcSet={`${item.img} 2x`} />
          <div className="bodylucky-item__group">
            <span className="bodylucky-item__state">
              Trạng thái:{' '}
              <div className={`${item.state ? 'active' : ''}`}>
                {item.state ? 'Đã nhận' : 'Chưa nhận'}
              </div>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BodyLucky;
