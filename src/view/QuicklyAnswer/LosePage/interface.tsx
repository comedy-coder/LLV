import { IRouter } from '@routers/interface';

export const routerLosepage: IRouter = {
  path: '/loser',
  loader: import('./index'),
  exact: true,
  masterLayout: true,
};
