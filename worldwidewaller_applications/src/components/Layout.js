// npm imports
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { connect } from 'react-redux';

// the Header component
import Header from './Header';

// css imports
import styles from './styles/layout.scss';

// utilities
import {
  THEME_NAMES, DEFAULT_THEME, getSiteThemes, changeTheme,
} from '../utilities/theme_helpers';

// redux actions
import {
  setTheme as setThemeAction,
  toggleHeader as toggleHeaderAction,
} from '../redux/actions';

/**
 * This component is responsible for the overall site layout and styling.
 * General site layout will be done here. The styling of the header and pages
 * themselves will be done in the specific classes.
 */
class Layout extends Component {
  /**
   * Updates the site's theme in the DOM and informs redux of the change.
   */
  static updateSiteTheme(setTheme, themeName, newThemeStyle) {
    // eslint-disable-next-line
    changeTheme(classNames(styles.theme, newThemeStyle));
    setTheme(themeName);
  }

  /**
   * Constructor.
   * Responsible for setting the site theme. This will be one of the following:
   *  - default config
   *  - query param
   *  - user set (currently only works after the user toggles the theme in-session)
   */
  constructor(props) {
    super(props);

    let themeName = DEFAULT_THEME;

    // figure out which theme to set (user, query param or default)
    const queryParamTheme = (new URLSearchParams(window.location.search)).get('default_theme');
    const currentTheme = props.selectedTheme;
    if (currentTheme !== null
      && THEME_NAMES[currentTheme.toUpperCase()] !== undefined) {
      themeName = THEME_NAMES[currentTheme.toUpperCase()];
    } else if (queryParamTheme !== null
      && THEME_NAMES[queryParamTheme.toUpperCase()] !== undefined) {
      themeName = THEME_NAMES[queryParamTheme.toUpperCase()];
    }

    // ensure we've actually found the theme
    const siteThemes = getSiteThemes();
    const selectedTheme = siteThemes.find((theme) => theme.label === themeName);
    Layout.updateSiteTheme(props.setThemeAction, selectedTheme.label, selectedTheme.value);

    this.state = {
      // This will need to go into a redux store so we can keep the menu
      // toggled between page changes
      headerCollapsed: props.headerCollapsed,
    };

    this.collapseHeader = this.collapseHeader.bind(this);
  }

  /**
   * Expand/collapse the header
   */
  collapseHeader() {
    const { headerCollapsed } = this.state;

    const toggleHeader = this.props.toggleHeaderAction;
    toggleHeader(!headerCollapsed);

    this.setState({
      headerCollapsed: !headerCollapsed,
    });
  }

  /**
   * Render.
   */
  render() {
    const { headerCollapsed } = this.state;
    const { children } = this.props;

    // adjust styles for header expansion/collapse
    const collapsedStyle = headerCollapsed ? styles.collapsed : null;
    const collapseText = headerCollapsed ? 'Expand Menu' : 'Collapse Menu';
    const collapseIcon = React.createElement(
      headerCollapsed ? MdExpandMore : MdExpandLess,
      {
        className: styles.collapseIcon,
      },
      null,
    );

    return (
      <div className={classNames(styles.layout, collapsedStyle)}>

        {/* Site Header */}
        <div className={classNames(styles.siteHeader, collapsedStyle)}>
          <Header />
        </div>

        {/* Collapse Header */}
        <div
          className={classNames(styles.collapseHeader, collapsedStyle)}
          title={collapseText}
        >

          <div
            className={styles.collapseHeaderWrapper}
            onClick={this.collapseHeader}
          >
            {collapseIcon}
          </div>
        </div>

        {/* Page Content */}
        <div id="wrapper" className={classNames(styles.pageContentWrapper, collapsedStyle)}>
          <div className={styles.pageContentOverlay} />
          <div className={styles.pageContent}>
            {children}
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    selectedTheme: state.updateClientSettings.selectedTheme,
    headerCollapsed: state.updateClientSettings.headerCollapsed,
  }
);

export default connect(
  mapStateToProps,
  { setThemeAction, toggleHeaderAction },
)(Layout);

Layout.defaultProps = {
  selectedTheme: null,
  headerCollapsed: false,
};

Layout.propTypes = {
  selectedTheme: PropTypes.string,
  setThemeAction: PropTypes.func.isRequired,
  headerCollapsed: PropTypes.bool,
  toggleHeaderAction: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
