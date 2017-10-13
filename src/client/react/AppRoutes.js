import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ViewUsers from './pages/ViewUsersPage';

export default class AppRoutes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/viewUsers" component={ViewUsers}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </Router>
    );
  }
}
