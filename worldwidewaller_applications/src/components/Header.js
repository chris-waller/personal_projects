// npm imports
import React from 'react';
import { Link } from 'react-router-dom';

// css imports
import styles from './styles/header.scss';

// image imports

/**
 * This component is responsible for displaying the site header.
 * The header will be replaced with a humburger menu at a specified screen size
 */
const Header = () => (
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
    {/* *************
    <div className={styles.linkSection}>
        <Link
          to="/"
          className={styles.link}
          title="Home"
        >
          Home
        </Link>
    </div>
    */}
  </div>
);

export default Header;
