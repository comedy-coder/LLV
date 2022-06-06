import { IRouter } from '@routers/interface';

export const routerReadyfightprotector: IRouter = {
  path: '/readyfightprotector',
  loader: import('./index'),
  exact: true,
  masterLayout: true,
};
