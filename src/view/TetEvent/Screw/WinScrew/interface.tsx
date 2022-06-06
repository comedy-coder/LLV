import { IRouter } from '@routers/interface';

export const routerWinscrew: IRouter = {
  path: '/winscrew',
  loader: import('./index'),
  exact: true,
  masterLayout: true,
};
