import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../landing/Landing';

const ViewsContainer = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
  </Switch>
);

export default ViewsContainer;
