// npm imports
import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

// import all of the react pages here
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

/**
 * The main application file for the site.
 */
class App extends Component {

 
  render() {
    return(
      <Router>
        <Switch>
          {/* Setup all the routes here */ }          
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />          
        </Switch>
      </Router>
    );
  }
}

export default App;