import React from 'react';
import 'styles.scss';
import { Link } from 'react-router-dom';
import { gold, kl, lixiic, llv, lxv, phoneic } from '../../shared/assets/images/index';
const Homellv = () => {
  const BottomNav = [
    {
      icon: llv,
      img: phoneic,
      path: '/',
    },
    {
      icon: lxv,
      img: lixiic,
      path: '/',
    },
    {
      icon: kl,
      img: gold,
      path: '/',
    },
  ];
  return (
    <div className="mainhome-llv">
      {BottomNav.map((item, index) => (
        <Link key={index} to={item.path}>
          <img srcSet={`${item.img} 2x`} alt="" />
          <img srcSet={`${item.img} 2x`} alt="" />
        </Link>
      ))}
    </div>
  );
};

export default Homellv;
