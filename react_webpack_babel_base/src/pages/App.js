import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Home from './Home';
import Loading from '../components/Loading';

// Create separate bundle (or chunk) for this page
const AsyncDynamicPAge = importedComponent(
  () => import("./DynamicPage"), // webpackChunkName:'DynamicPage'
  {
    LoadingComponent: Loading
  }
);
// Create separate bundle (or chunk) for this page
const AsyncNoMatch = importedComponent(
  () => import("./NoMatch"), // webpackChunkName:'NoMatch'
  {
    LoadingComponent: Loading
  }
);

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={AsyncDynamicPAge} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;