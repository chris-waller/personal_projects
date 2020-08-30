// npm imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// css imports
import styles from './styles/header.scss';

/**
 * This component is responsible for displaying the site header.
 * The header will be replaced with a humburger menu at a specified screen size
 */
/* eslint-disable react/prefer-stateless-function */
class Header extends Component {
  /**
   * Constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      showThemeSelector: false,
    };
  }

  /**
   * Toggle the theme selector modal open/closed.
   */
  toggleThemeSelector() {
    const { showThemeSelector } = this.state;
    this.setState({
      showThemeSelector: !showThemeSelector,
    });
  }

  /**
   * Render.
   */
  render() {
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

        {/* Links Section */}
        {/* ************* */}
        <div className={styles.optionsSection}>
          <Link to="/" className={styles.link}>Resume</Link>
          <Link to="/settings" className={styles.link}>Settings</Link>
          <Link to="/contact" className={styles.link}>Contact Me</Link>
        </div>

      </div>
    );
  }
}
export default Header;
