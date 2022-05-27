import { IRouter } from '@routers/interface';

export const routerGuide: IRouter = {
  path: '/guide',
  loader: import('./index'),
  exact: true,
};
