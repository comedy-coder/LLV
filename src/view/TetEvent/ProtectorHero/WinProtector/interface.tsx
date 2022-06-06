import { IRouter } from '@routers/interface';

export const routerWinprotector: IRouter = {
  path: '/winprotector',
  loader: import('./index'),
  exact: true,
  masterLayout: true,
};
