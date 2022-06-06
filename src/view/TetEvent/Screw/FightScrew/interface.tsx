import { IRouter } from '@routers/interface';

export const routerFightScrew: IRouter = {
  path: '/fightscrew',
  loader: import('./index'),
  exact: true,
  masterLayout: true,
};
