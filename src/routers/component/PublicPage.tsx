import React from 'react';
import { Switch } from 'react-router';
import DefaultLayout from '@layout/index';
import { publicRouter } from '../index';
import ShowRouter from './ShowRouter';
import AnimatedPage from '@view/AnimatedRouter/AnimatedPage';

const PublicPage: React.FC = () => {
  return (
    <AnimatedPage>
      <Switch>{ShowRouter({ routers: publicRouter, MasterLayout: DefaultLayout })}</Switch>
    </AnimatedPage>
  );
};
export default PublicPage;
