import React from 'react';
import ReactDOM from 'react-dom';
import DashboardPage from './pages/DashboardPage';
import { MapList } from './components/Map';
import Gmap from './components/Map';
import Map from './components/Map';
import App from './App';
import AcStation from './pages/AcStation';
import DcStation from './pages/DcStation';
import UsageTable from './pages/UsageTable';
import Selection from './pages/Selection';
// import BarChart from './pages/BarPage';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
ReactDOM.render(
  <Router>
    <App>
      <Switch>
         <Redirect exact from="/" to="/dashboard"/>
         <Route key="index" exact path="/dashboard" component={DashboardPage} />
         {/* <Route key="map" path="/maps"> */}
           {/* <Map />  
         </Route> */}
         <Route key="ac" path="/acstation" component={AcStation} />
         <Route key="dc" path="/dcstation" component={DcStation} />
         {/* <Route key="usage" path="/usagetable" component={UsageTable} /> */}
         {/* <Route key="bar" path="/barchart" component={BarChart} /> */}
         {/* <Route key="selection" path="/selection" component={Selection} /> */}
         <Redirect to="/dashboard" />
      </Switch>
    </App>
  </Router>, // eslint-disable-next-line no-undef
  document.getElementById('root')
);
