// npm imports
import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

// style imports
import styles from './css/header.scss';

/**
 * This component is responsible for displaying the site header.
 */
class Header extends Component {
   
  /**
   * Render.
   */
  render() {    
    return (
      
      <div className={styles.header}>

          <div className={styles.menuRow}>
            
            {/* 'Home' Icon */}
            {/* *************************** */}         
            <h1 className={styles.homeIcon}>P2H</h1>        

            {/* Links section */}
            <div className={styles.linkSection}>
              <Link to="/#about" className={styles.link}>About us</Link>
              <Link to="/#osteopathy" className={styles.link}>What is Osteopathy</Link>
              <Link to="/#services" className={styles.link}>Services</Link>
              <Link to="/#locations" className={styles.link}>Locations</Link>                
              <Link to="/#contact" className={styles.link}>Contact</Link>           

              <a 
                href="https://precision2healthosteopathy.janeapp.com/" 
                className={styles.bookNow}
                target="_"
              >
                BOOK NOW
              </a>
            </div>              
          </div>

          <div className={styles.logoSectionContainer}>          
            <div className={styles.logoSection} >
              <div className={styles.logo} />
            </div>
          </div>
      
          
          {/* Hambuger Menu Section */ }
          {/* ********************** 
          <div className={styles.menuSection}>
            <HambugerMenu 
              slideDirection="top"
              iconUrl={hamburgerIcon} 
            />
          </div>
          */}

        </div>      
    );
  }
}

export default Header;