import { IRouter } from '@routers/interface';

export const routerScrewhome: IRouter = {
  path: '/screwhome',
  loader: import('./index'),
  exact: true,
  masterLayout: true,
};
