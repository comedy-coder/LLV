import { IRouter } from '@routers/interface';

export const routerLXV: IRouter = {
  path: '/lxvhome',
  loader: import('./index'),
  exact: true,
};
