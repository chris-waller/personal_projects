// npm imports
import React, { Component } from 'react';
import { Redirect } from 'react-router';

// style imports
import styles from './styles/header.scss';

/**
 * This component is responsible for displaying the site header.
 * The header will be replaced with a humburger menu at a specified screen size
 */
class Header extends Component {
  /**
   * Constructor.
   */
  constructor() {
    super();

    this.state = {
      redirect: false,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  /**
   * User has clicked a the home button.
   */
  handleOnClick() {
    this.setState({ redirect: true });
  }

  /**
   * Render.
   */
  render() {
    const { redirect } = this.state;
    // user clicked the map image
    if (redirect) {
      return <Redirect push to="/" />;
    }

    return (
      <div className={styles.container}>

        {/* Home Icon Section */}
        {/* ***************** */}
        <div className={styles.homeSection}>

          <div
            title="Home"
            onClick={this.handleOnClick}
            className={styles.homeButton}
          >
            Home
          </div>
          pl.p.lp.lp.lp.
        </div>
        ijmimjimjimjijijmiijm
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

        {/* Hambuger Menu Section */ }
        {/* ********************* */ }
        <div className={styles.menuSection} />
      </div>
    );
  }
}

export default Header;
