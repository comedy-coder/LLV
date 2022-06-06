import { IRouter } from '@routers/interface';

export const routerFightprotector: IRouter = {
  path: '/fightprotector',
  loader: import('./index'),
  exact: true,
  masterLayout: true,
};
