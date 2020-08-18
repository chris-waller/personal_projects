// npm impodrts
import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

// custom components
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

const App = () => {
  return (
    <Router>      
      <Switch>
        <Route exact path="/" component={Home} />        
        <Route component={NoMatch} />
      </Switch>   
    </Router>
  );
};

export default App;