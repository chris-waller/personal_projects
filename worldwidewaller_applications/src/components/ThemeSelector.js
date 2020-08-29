// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DropDown from 'react-dropdown';
import classNames from 'classnames';
import { connect } from 'react-redux';

// style imports
import styles from './styles/theme-selector.scss';

// utilities
import { THEME_NAMES, getSiteThemes, changeTheme } from '../utilities/theme_helpers';

// redux actions
import {
  setTheme as setThemeAction,
} from '../redux/actions';

/**
 * Allows the user to change the overall site theme.
 */
class ThemeSelector extends Component {
  /**
   * Updates the site's theme in the DOM and informs redux of the change.
   */
  static updateSiteTheme(setTheme, themeName, themeStyle) {
    changeTheme(classNames(styles.theme, themeStyle));
    setTheme(themeName);
  }

  constructor(props) {
    super(props);

    // set the initial theme
    let defaultThemeName = THEME_NAMES.OCEAN;
    // eslint-disable-next-line no-undef
    let defaultTheme = (new URLSearchParams(window.location.search)).get('default_theme');
    // query param provided for the theme
    if (defaultTheme !== null) {
      // check if the provided theme exists
      defaultTheme = THEME_NAMES[defaultTheme.toUpperCase()];
      defaultThemeName = defaultTheme;
    }

    const siteThemes = getSiteThemes();
    const selectedTheme = props.selectedTheme === null
      ? siteThemes.find((theme) => theme.label === defaultThemeName)
      : siteThemes.find((theme) => theme.label === props.selectedTheme);
    ThemeSelector.updateSiteTheme(props.setThemeAction, selectedTheme.label, selectedTheme.value);

    this.state = {
      selectedTheme,
    };

    this.themeChanged = this.themeChanged.bind(this);
  }

  /**
   * User has changed the theme with the dropdown.
   */
  themeChanged(option) {
    const { selectedTheme } = this.state;

    // no point on going further if the user selected the same theme
    if (option.label === selectedTheme.label) return;

    // eslint-disable-next-line react/destructuring-assignment
    ThemeSelector.updateSiteTheme(this.props.setThemeAction, option.label, option.value);
    this.setState({ selectedTheme: option });
  }

  /* eslint-disable */
  render() {
    const { selectedTheme } = this.props;
    const siteThemes = getSiteThemes();
    return(
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}
/* eslint-enable */

const mapStateToProps = (state) => (
  {
    selectedTheme: state.updateClientSettings.selectedTheme,
  }
);

export default connect(
  mapStateToProps,
  { setThemeAction },
)(ThemeSelector);

ThemeSelector.defaultProps = {
  selectedTheme: null,
};

ThemeSelector.propTypes = {
  selectedTheme: PropTypes.string,
  setThemeAction: PropTypes.func.isRequired,
};
