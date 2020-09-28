// npm impodrts
import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { VisualizerProvider } from 'react-lifecycle-visualizer';

// custom components
import Resume from '~/pages/Resume';
import Settings from '~/pages/Settings';
import Contact from '~/pages/Contact';
import CodePlayground from '~/code_playground/TestPage';
import About from '~/pages/About';
import NoMatch from '~/pages/NoMatch';
import WelcomeSplash from '~/components/modals/WelcomeSplash';

// global styles
import '~/styles/global_styles.scss';

// utilities
import config from '~/config/client_config.json';
import {
  THEME_NAMES, DEFAULT_THEME, getSiteThemes, changeTheme,
} from '~/utilities/theme_helpers';

// redux
import store from '~/redux/store';
import {
  setTheme as setThemeAction,
  setSplashPageVisibility as setSplashAction,
} from '~/redux/actions/userSettings';
import {
  setConfigSettings as setConfigSettingsAction,
} from './redux/actions/configSettings';

class App extends Component {
  /**
   * Updates the site's theme in the DOM and informs redux of the change.
   */
  static setSiteTheme() {
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

    // change theme in DOM
    changeTheme(selectedTheme.value);
    // inform redux
    store.dispatch(setThemeAction(selectedTheme.label));
  }

  static setConfigSettings() {
    store.dispatch(setConfigSettingsAction(config));
  }

  static setSplashPageVisibility() {
    const queryParamSplash = (new URLSearchParams(window.location.search)).get('hide_splash_pages');
    let hideAll = true;
    if (queryParamSplash !== null && queryParamSplash.toLocaleUpperCase() === 'TRUE') {
      hideAll = true;
    }

    const splashPageVisibility = {
      hideAll,
      showWelcome: true,
      showResume: true,
      showSettings: true,
    };
    store.dispatch(setSplashAction(splashPageVisibility));

    const hideWelcomePage = !splashPageVisibility.showWelcome || hideAll;
    return hideWelcomePage;
  }

  constructor() {
    super();

    App.setSiteTheme();
    App.setConfigSettings();
    const hideWelcomePage = App.setSplashPageVisibility();
    this.state = {
      hideWelcomePage,
    };
  }

  closeSplashScreen = () => {
    this.setState({
      hideWelcomePage: true,
    });
  }

  render() {
    const { hideWelcomePage } = this.state;
    return (
      <VisualizerProvider>
        <Router>
          <Provider store={store}>
            {!hideWelcomePage
              && <WelcomeSplash closeModal={this.closeSplashScreen} /> }
            <Switch>
              <Route path="/" exact component={Resume} />
              <Route path="/resume" exact component={Resume} />
              <Route path="/settings" exact component={Settings} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/about" exact component={About} />
              <Route path="/playground" exact component={CodePlayground} />
              <Route component={NoMatch} />
            </Switch>
          </Provider>
        </Router>
      </VisualizerProvider>
    );
  }
}

export default App;
