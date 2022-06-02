import { IRouter } from '@routers/interface';

export const routerFindingEnemy: IRouter = {
  path: '/findingenemy',
  loader: import('./index'),
  exact: true,
  masterLayout: true,
};
