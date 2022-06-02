import { IRouter } from '@routers/interface';

export const routerWinpage: IRouter = {
  path: '/winner',
  loader: import('./index'),
  exact: true,
  masterLayout: true,
};
