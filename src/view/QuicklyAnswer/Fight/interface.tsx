import { IRouter } from '@routers/interface';

export const routerFight: IRouter = {
  path: '/fight',
  loader: import('./index'),
  exact: true,
  masterLayout: true,
};
