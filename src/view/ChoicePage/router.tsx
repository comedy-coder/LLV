import { IRouter } from '@routers/interface';

export const routerChoice: IRouter = {
  path: '/choicepage',
  loader: import('./index'),
  masterLayout: false,
};
