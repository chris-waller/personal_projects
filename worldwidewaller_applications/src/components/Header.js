// npm imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// css imports
import styles from './styles/header.scss';

// image imports

/**
 * This component is responsible for displaying the site header.
 * The header will be replaced with a humburger menu at a specified screen size
 */
class Header extends Component {
 
  /**
   * Render.
   */
  render() {    
    return (      
      <div className={styles.header}>
        
        {/* Home Icon Section */}
        {/* ***************** */}          
        <div className={styles.logoSection}>        
            <Link to="/">          
              <div title="Home" className={styles.logo} />          
            </Link>          
        </div>
        
        {/* Links Section */}
        {/* ************* */}
        <div className={styles.linkSection}>          
            <Link 
              to="/" 
              className={styles.link}
              title="Home"
            >
              Home
            </Link>                               
        </div>
        
        {/* Hambuger Menu Section */ }
        {/* ********************* */ }
        <div className={ styles.menuSection}>          
        </div>

      </div>
    );
  }
}

export default Header;


