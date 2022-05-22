import React from 'react';
import ReactDOM from 'react-dom';
import DashboardPage from './pages/DashboardPage';
import App from './App';
import AcStation from './pages/AcStation';
import DcStation from './pages/DcStation';

import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
ReactDOM.render(
  <Router>
    <App>
      <Switch>
         <Redirect exact from="/" to="/dashboard"/>
         <Route key="index" exact path="/dashboard" component={DashboardPage} />
         <Route key="ac" path="/acstation" component={AcStation} />
         <Route key="dc" path="/dcstation" component={DcStation} />
         <Redirect to="/dashboard" />
      </Switch>
    </App>
  </Router>, // eslint-disable-next-line no-undef
  document.getElementById('root')
);
