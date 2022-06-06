import { IRouter } from '@routers/interface';

export const routerRules: IRouter = {
  path: '/rules',
  loader: import('./index'),
  exact: true,
  masterLayout: true,
};
