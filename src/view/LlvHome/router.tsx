import { IRouter } from '@routers/interface';

export const routerLLV: IRouter = {
  path: '/llvhome',
  loader: import('./index'),
  exact: true,
};
