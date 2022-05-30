import { IRouter } from '@routers/interface';

export const routerLLVLLCt: IRouter = {
  path: '/llvllct',
  loader: import('./index'),
  exact: true,
};
