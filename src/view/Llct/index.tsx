import { arrow, blxic, dct } from '@assets/images';
import React from 'react';
import { Context } from 'src/store/provider';
import { useContext } from 'react';
import './styles.scss';
import Button from '@view/Button';
import { useHistory } from 'react-router';
const LLCt = () => {
  const [state, dispatch] = useContext(Context);
  const history = useHistory();
  const handleBack = () => {
    history.push('./llvhome');
  };
  const itemBody = [
    {
      title: 'LA PHÔNG VĨNH TƯỜNG ÁNH KIM',
      desc: 'Tối thiểu 50 tấm trang trí Vĩnh Tường Ánh Kim + 100% Khung nổi Vĩnh Tường FineLINE Plus/ TopLINE Plus',
    },
    {
      title: 'LA PHÔNG VĨNH TƯỜNG (NỀN DURA) ',
      desc: 'Tối thiểu 50 tấm trang trí Vĩnh Tường (nền tấm DURA) + 100% Khung Vĩnh Tường FineLINE Plus/ TopLINE Plus',
    },
    {
      title: 'TRẦN VĨNH TƯỜNG TIÊU CHUẨN-XANH',
      desc: 'Tối thiểu 20 tấm thạch cao Vĩnh Tường - Gyproc TIÊU CHUẨN (khổ lớn) + 100% khung Trần chìm (Xanh) Vĩnh Tường M29Tối thiểu 50 tấm trang trí Vĩnh Tường Ánh Kim + 100% Khung nổi Vĩnh Tường FineLINE Plus/ TopLINE Plus',
    },
    {
      title: 'LA PHÔNG VĨNH TƯỜNG ÁNH KIM',
      desc: 'Tối thiểu 50 tấm trang trí Vĩnh Tường Ánh Kim + 100% Khung nổi Vĩnh Tường FineLINE Plus/ TopLINE Plus',
    },
    {
      title: 'LA PHÔNG VĨNH TƯỜNG ÁNH KIM',
      desc: 'Tối thiểu 50 tấm trang trí Vĩnh Tường Ánh Kim + 100% Khung nổi Vĩnh Tường FineLINE Plus/ TopLINE Plus',
    },
  ];
  return (
    <div className="main-llct">
      <Button icon={arrow} handleClick={handleBack} top="26px" />
      <div className="main-llct__header">
        <div className="main-llct__header__number">
          <span className="main-llct__header__number1"> Số lượt lắc của bạn là :</span>{' '}
          <span className="main-llct__header__number2">{state.pushremaining}</span>
        </div>
        <span className="main-llct__header__title"> Nhiệm vụ</span>
        <div className="main-llct__header__desc">
          Đăng hình ảnh công trình để nhận thêm lượt lắc nha!{' '}
        </div>
      </div>
      <div className="main-llct__body">
        {itemBody.map((item, index) => (
          <div className="main-llct__body__item" key={index}>
            <img srcSet={`${blxic} 2x`} alt="" />
            <div className="main-llct__body__group">
              <div> {item.title}</div>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="main-llct__button">
        <Button icon={dct} handleClick={handleBack} size="sxm" />
      </div>
    </div>
  );
};

export default LLCt;
