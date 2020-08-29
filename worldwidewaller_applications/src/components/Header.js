// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// custom components
import ThemeSelector from './ThemeSelector';

// css imports
import styles from './styles/header.scss';

/**
 * This component is responsible for displaying the site header.
 * The header will be replaced with a humburger menu at a specified screen size
 */
/* eslint-disable react/prefer-stateless-function */
class Header extends Component {
  render() {
    const { headerOptions } = this.props;

    return (
      <div className={styles.container}>

        {/* Home Icon Section */}
        {/* ***************** */}
        <div className={styles.logoSection}>
          <Link to="/">
            <div className={styles.homeLink} title="Home">
              <div title="Home">&nbsp;</div>
            </div>
          </Link>
        </div>

        {/* Options Section */}
        {/* ************* */}
        <div className={styles.optionsSection}>
          {headerOptions.map((option) => (
            React.createElement(
              option.type,
              {
                key: option.key,
                ...option.props,
              },
              option.props.children,
            )
          ))}
          <ThemeSelector />
        </div>

      </div>
    );
  }
}
export default Header;

Header.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  headerOptions: PropTypes.array.isRequired,
};
