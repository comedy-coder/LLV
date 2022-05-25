import { IRouter } from '@routers/interface';

export const routerDash: IRouter = {
  path: '/dash',
  loader: import('./index'),
  exact: true,
};
