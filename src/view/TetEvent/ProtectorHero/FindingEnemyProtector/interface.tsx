import { IRouter } from '@routers/interface';

export const routerFindingenemyprotector: IRouter = {
  path: '/findingenemyprotector',
  loader: import('./index'),
  exact: true,
  masterLayout: true,
};
