// npm imports
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import DropDown from 'react-dropdown';
import { connect } from 'react-redux';

// the Header component
import Header from './Header';

// css imports
// eslint-disable-next-line css-modules/no-unused-class
import styles from './styles/layout.scss';

// utilities
import { THEME_NAMES, getSiteThemes, changeTheme } from '../utilities/theme_helpers';

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
  static updateSiteTheme(setTheme, themeName, themeStyle) {
    changeTheme(classNames(styles.theme, themeStyle));
    setTheme(themeName);
  }

  /**
   * Constructor.
   */
  constructor(props) {
    super(props);

    // get theme info for the dropdown -- will eventually want to rename this
    const siteThemes = getSiteThemes();

    // set the initial theme
    let defaultThemeName = THEME_NAMES.HALLOWEEN;
    // eslint-disable-next-line no-undef
    let defaultTheme = (new URLSearchParams(window.location.search)).get('default_theme');
    // query param provided for the theme
    if (defaultTheme !== null) {
      // check if the provided theme exists
      defaultTheme = THEME_NAMES[defaultTheme.toUpperCase()];
      defaultThemeName = defaultTheme;
    }

    const selectedTheme = props.selectedTheme === null
      ? siteThemes.find((theme) => theme.label === defaultThemeName)
      : siteThemes.find((theme) => theme.label === props.selectedTheme);
    Layout.updateSiteTheme(props.setThemeAction, selectedTheme.label, selectedTheme.value);

    this.state = {
      // This will need to go into a redux store so we can keep the menu
      // toggled between page changes
      headerCollapsed: props.headerCollapsed,
      siteThemes,
      selectedTheme,
    };

    this.collapseHeader = this.collapseHeader.bind(this);
    this.themeChanged = this.themeChanged.bind(this);
  }

  /**
   * Expand/collapse the header
   */
  collapseHeader() {
    const { headerCollapsed } = this.state;

    // eslint-disable-next-line react/destructuring-assignment
    const toggleHeader = this.props.toggleHeaderAction;
    toggleHeader(!headerCollapsed);

    this.setState({
      headerCollapsed: !headerCollapsed,
    });
  }

  /**
   * User has changed the theme with the dropdown.
   */
  themeChanged(option) {
    const { selectedTheme } = this.state;

    // no point on going further if the user selected the same theme
    if (option.label === selectedTheme.label) return;

    // eslint-disable-next-line react/destructuring-assignment
    Layout.updateSiteTheme(this.props.setThemeAction, option.label, option.value);
    this.setState({ selectedTheme: option });
  }

  /**
   * Render.
   */
  render() {
    const { headerCollapsed, siteThemes, selectedTheme } = this.state;
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
          <div className={styles.selectTheme}>
            <h5 className={styles.selectTheme}>Select Theme</h5>
            <DropDown
              options={siteThemes}
              onChange={this.themeChanged}
              value={selectedTheme}
              placeholder="Select an option"
              className={styles.dropDown}
              placeholderClassName={styles.dropDownPlaceholder}
              menuClassName={styles.dropDownMenu}
            />
          </div>
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
          <div id="foo" className={styles.pageContentOverlay} />
          <div id="bar" className={styles.pageContent}>
            {children}
          </div>
        </div>

      </div>
    );
  }
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state, ownProps = {}) => (
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
