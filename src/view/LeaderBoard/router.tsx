import { IRouter } from '@routers/interface';

export const routerLeaderBoard: IRouter = {
  path: '/leaderboard',
  loader: import('./index'),
  exact: true,
};
