import { IRouter } from '@routers/interface';

export const routerTetEvent: IRouter = {
  path: '/tetevent',
  loader: import('./index'),
  exact: true,
};
