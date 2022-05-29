import { IRouter } from '@routers/interface';

export const routerLLVShake: IRouter = {
  path: '/llvshake',
  loader: import('./index'),
  exact: true,
};
