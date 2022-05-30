import { IRouter } from '@routers/interface';

export const routerKL: IRouter = {
  path: '/klhome',
  loader: import('./index'),
  exact: true,
};
