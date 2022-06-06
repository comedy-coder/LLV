import { IRouter } from '@routers/interface';

export const routerReadyfightscrew: IRouter = {
  path: '/readyfightscrew',
  loader: import('./index'),
  exact: true,
  masterLayout: true,
};
