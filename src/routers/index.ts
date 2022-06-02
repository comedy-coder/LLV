import LazyLoadImage from '@shared/components/LazyLoadImage/LazyLoadImage';


import LoadableRouter from './loadableRouter';
import { privatePage, publicPage } from './mainRouter';

export const privateRouter = new LoadableRouter({
  loading: LazyLoadImage,
  routers: privatePage,
}).routers;

export const publicRouter = new LoadableRouter({
  loading: LazyLoadImage,
  routers: publicPage,
}).routers;
