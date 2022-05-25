import React from 'react';
import { Switch } from 'react-router';
import DefaultLayout from '@layout/index';
import { publicRouter } from '../index';
import ShowRouter from './ShowRouter';

const PublicPage: React.FC = () => {
  return <Switch>{ShowRouter({ routers: publicRouter, MasterLayout: DefaultLayout })}</Switch>;
};
export default PublicPage;
