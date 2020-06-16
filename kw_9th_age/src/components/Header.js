// npm imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// custom components
import HambugerMenu from './HamburgerMenu';

// css imports
import styles from './styles/header.scss';

// image imports
import logo from "../images/9th_age_seal.png";
import hamburgerIcon from "../images/hamburger-icon.png";

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
              <img title="Home" src={logo} className={styles.logo} />          
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
              Homestead
            </Link>
            <Link 
              to="/map" 
              className={styles.link}
              title="Map"
            >
              The Known World
            </Link>   
            <Link 
              to="/campaign" 
              className={styles.link}
              title="Campaign Information"
            >
              War Status
            </Link>
            <Link 
              to="/members" 
              className={styles.link}
              title="Members"
            >
              The Village
            </Link>          
            <Link 
              to="/about" 
              className={styles.link}
              title="About this site"
            >
              Town Crier
            </Link>                       
        </div>
        
        {/* Hambuger Menu Section */ }
        {/* ********************* */ }
        <div className={ styles.menuSection}>
          <HambugerMenu               
            iconUrl={hamburgerIcon} 
          />
        </div>

      </div>
    );
  }
}

export default Header;


