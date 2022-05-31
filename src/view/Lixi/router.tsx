import { IRouter } from '@routers/interface';

export const routerLIXI: IRouter = {
  path: '/lixi',
  loader: import('./index'),
  exact: true,
};
