import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import UserProfile from './UserProfile';

function AppNew() {
  return(
    <Switch>
      <Route exact path="/" component={ App } />
      <Route path="/users/:url" component={ UserProfile } />
    </Switch>
  )
}

export default AppNew;
