import { IRouter } from '@routers/interface';

export const routerprotectorhome: IRouter = {
  path: '/protectorhome',
  loader: import('./index'),
  exact: true,
  masterLayout: true,
};
