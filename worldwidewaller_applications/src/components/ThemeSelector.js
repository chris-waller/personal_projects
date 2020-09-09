// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DropDown from 'react-dropdown';
import { connect } from 'react-redux';

// style imports
import styles from './styles/theme-selector.scss';

// utilities
import { getSiteThemes, changeTheme } from '../utilities/theme_helpers';

// redux actions
import {
  setTheme as setThemeAction,
} from '~/redux/actions/userSettings';

/**
 * Allows the user to change the overall site theme.
 */
class ThemeSelector extends Component {
  /**
   * Updates the site's theme in the DOM and informs redux of the change.
   */
  static updateSiteTheme(setTheme, themeName, newThemeStyle) {
    changeTheme(newThemeStyle);
    setTheme(themeName);
  }

  constructor(props) {
    super(props);

    const { selectedTheme } = props;

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

    ThemeSelector.updateSiteTheme(this.props.setThemeAction, option.label, option.value);
    this.setState({ selectedTheme: option });
  }

  render() {
    const { selectedTheme } = this.props;
    const siteThemes = getSiteThemes();
    return (
      <div className={styles.themeSelectorContainer}>
        <h5>Select Theme:</h5>
        <DropDown
          options={siteThemes}
          onChange={this.themeChanged}
          value={selectedTheme}
          placeholder="Select a site theme"
          className={styles.dropDown}
          placeholderClassName={styles.dropDownPlaceholder}
          menuClassName={styles.dropDownMenu}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    selectedTheme: state.appSettings.selectedTheme,
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
