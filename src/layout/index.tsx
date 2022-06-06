import React, { memo, PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.scss';
import { gold, kl, lixiic, llv, lxv, phoneic } from '@assets/images';
interface IDefaultLayoutProps {
  history: any;
}
const BottomNav = [
  {
    icon: llv,
    img: phoneic,
    path: ['/llvhome', '/llvshake', '/llvllct'],
  },
  {
    icon: lxv,
    img: lixiic,
    path: [
      '/lxvhome',
      '/lixi',
      '/quicklyanswer',
      '/fight',
      '/readyfight',
      '/findingenemy',
      '/winner',
      '/tetevent',
      '/winscrew',
      '/screwhome',
      '/findingenemyscrew',
      '/fightscrew',
      '/protectorhome',
      '/readyfightprotector',
      '/fightprotector',
      '/findingenemyprotector',
      '/rules',
      '/leaderboard',
      '/loser',
    ],
  },
  {
    icon: kl,
    img: gold,
    path: ['/klhome'],
  },
];

const DefaultLayout: React.FC<PropsWithChildren<IDefaultLayoutProps>> = props => {
  const { pathname } = useLocation();
  const activeNav = BottomNav.findIndex(e => e.path.some(path => path === pathname));

  return (
    <div className="all-page-component">
      <div className="main-component">{props.children}</div>
      <div className="main-navbottom">
        {BottomNav.map((item, index) => (
          <Link
            key={index}
            to={item.path[0]}
            className={`main-item ${activeNav === index ? 'active' : ''}`}
          >
            <img srcSet={`${item.img} 2x`} alt="" />
            <div>
              <img srcSet={`${item.icon} 2x`} alt="" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default memo(DefaultLayout);
