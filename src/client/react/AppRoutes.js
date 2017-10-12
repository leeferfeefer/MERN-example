import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';
import ViewUsers from './components/ViewUsers';

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
