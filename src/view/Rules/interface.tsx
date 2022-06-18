import React from 'react';

export type HeroSliderProps = {
  data: Array<any>;
  control?: Boolean;
  auto?: Boolean;
  timeOut?: Number;
};
export type HeroSliderItemProps = {
  item?: any;

  active?: boolean;
};
