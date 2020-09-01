// npm impodrts
import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// custom components
import Resume from '~/pages/Resume';
import Settings from '~/pages/Settings';
import Contact from '~/pages/Contact';
import NoMatch from '~/pages/NoMatch';

// global styles
import '~/styles/global_styles.scss';

// utilities
import {
  THEME_NAMES, DEFAULT_THEME, getSiteThemes, changeTheme,
} from '~/utilities/theme_helpers';

// redux
import store from '~/redux/store';
import {
  setTheme as setThemeAction,
} from '~/redux/actions';

class App extends Component {
  /**
   * Updates the site's theme in the DOM and informs redux of the change.
   */
  static updateSiteTheme(themeName, newThemeStyle) {
    // change theme in DOM
    changeTheme(newThemeStyle);
    // inform redux
    store.dispatch(setThemeAction(themeName));
  }

  constructor() {
    super();

    let themeName = DEFAULT_THEME;

    // figure out which theme to set (default or query param)
    const queryParamTheme = (new URLSearchParams(window.location.search)).get('default_theme');
    if (queryParamTheme !== null
      && THEME_NAMES[queryParamTheme.toUpperCase()] !== undefined) {
      themeName = THEME_NAMES[queryParamTheme.toUpperCase()];
    }

    // ensure we've actually found the theme
    const siteThemes = getSiteThemes();
    const selectedTheme = siteThemes.find((theme) => theme.label === themeName);
    App.updateSiteTheme(selectedTheme.label, selectedTheme.value);
  }

  render() {
    return (
      <Router>
        <Provider store={store}>
          <Switch>
            <Route path="/" exact component={Contact} />
            <Route path="/resume" exact component={Resume} />
            <Route path="/settings" exact component={Settings} />
            <Route path="/contact" exact component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Provider>
      </Router>
    );
  }
}

export default App;
