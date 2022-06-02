import { IRouter } from '@routers/interface';

export const routerQuicklyAnswer: IRouter = {
  path: '/quicklyanswer',
  loader: import('./index'),
  exact: true,
  masterLayout: true,
};
