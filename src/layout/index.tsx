import React, { memo, PropsWithChildren, useState } from 'react';
import './style.scss';
interface IDefaultLayoutProps {
  history: any;
}

const DefaultLayout: React.FC<PropsWithChildren<IDefaultLayoutProps>> = props => {
  return (
    <div className="all-page-component">
      <div className="main-component">{props.children}</div>
    </div>
  );
};

export default memo(DefaultLayout);
