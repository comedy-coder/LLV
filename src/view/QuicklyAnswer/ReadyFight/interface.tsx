import { IRouter } from '@routers/interface';

export const routerReadyfight: IRouter = {
  path: '/readyfight',
  loader: import('./index'),
  exact: true,
  masterLayout: true,
};
