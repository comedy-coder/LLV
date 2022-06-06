import { IRouter } from '@routers/interface';

export const routerFindingenemyscrew: IRouter = {
  path: '/findingenemyscrew',
  loader: import('./index'),
  exact: true,
  masterLayout: true,
};
