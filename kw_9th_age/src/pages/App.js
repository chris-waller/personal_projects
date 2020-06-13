import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Home from './Home';
import Loading from '../components/Loading';

// Create separate bundle (or chunk) for each page
const MapPage = importedComponent(
  () => import("./Map"), // webpackChunkName:'Map'
  {
    LoadingComponent: Loading
  }
);
const MembersPage = importedComponent(
  () => import("./Members"), // webpackChunkName:'Members'
  {
    LoadingComponent: Loading
  }
);
const CampaignPage = importedComponent(
  () => import("./Campaign"), // webpackChunkName:'Campaign'
  {
    LoadingComponent: Loading
  }
);
const AboutPage = importedComponent(
  () => import("./About"), // webpackChunkName:'About'
  {
    LoadingComponent: Loading
  }
);
const AsyncNoMatch = importedComponent(
  () => import("./NoMatch"), // webpackChunkName:'NoMatch'
  {
    LoadingComponent: Loading
  }
);

const App = () => {
  return (
    <Router> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/map" component={MapPage} />
          <Route exact path="/campaign" component={CampaignPage} />
          <Route exact path="/members" component={MembersPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route component={AsyncNoMatch} />
        </Switch> 
    </Router>
  );
};

export default App;