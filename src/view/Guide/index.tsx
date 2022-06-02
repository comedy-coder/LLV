import HeroSlider from '@view/Slider';
import React from 'react';
import { slide1, slide2, slide3, slide4 } from '@assets/images';
import './styles.scss';
import AnimatedPage from '@view/AnimatedRouter/AnimatedPage';

const Guide = () => {
  const dataSlider = [
    {
      bg: slide1,
      desc: 'Anh em đã quy đổi lượt lắc cho mình chưa? Lắc Lộc Vàng năm nay có gì hot? Xem ngay!',
    },
    {
      bg: slide2,
      desc: 'Gửi hình ảnh công trình/ hóa đơn để nhận thêm nhiều lượt lắc',
    },
    {
      bg: slide3,
      desc: 'Lắc càng nhiều - Nhảy càng sung - Quà khủng đến 15 tỷ',
    },
    {
      bg: slide4,
      desc: 'Lắc chắt chiu từng lượt Nhận ngay 1 phần quà,Lắc tới bến chục lượt ,Nhận một lúc 10 phần quà!',
    },
  ];
  return (
    <AnimatedPage>
      <div className="main-guide">
        <HeroSlider data={dataSlider} control={true} />
      </div>
    </AnimatedPage>
  );
};

export default Guide;
