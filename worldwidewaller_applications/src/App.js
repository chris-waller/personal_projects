// npm impodrts
import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// custom components
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

// redux store
import store from './redux/store';

const App = () => (
  <Router>
    <Provider store={store}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </Provider>
  </Router>
);

export default App;
