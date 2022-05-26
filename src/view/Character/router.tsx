import { IRouter } from '@routers/interface';

export const routerCharecter: IRouter = {
  path: '/charecter',
  loader: import('./index'),
  exact: true,
};
