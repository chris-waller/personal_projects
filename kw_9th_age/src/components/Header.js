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
   * Constructor.
   */
  constructor() {
    super();

    this.state = {
      showHamburgerMenu: false,
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);    
  }

  /**
   * ComponentDidMount.
   */
  componentDidMount() {    
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions.bind(this));
  }

  /**
   * ComponentWillUnmount.
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
  }
  /**
   * Update the windown dimensions so we can shift the hamburger menu to the left/right as required
   */
  updateWindowDimensions() {
    this.setState({ 
      showHamburgerMenu: window.innerWidth < 640 ? true : false,      
    });
  }
 
  /**
   * Render.
   */
  render() {    
    return (
      
      <div className={styles.header}>
        <div>          

          {/* Home Icon Section */}
          {/* ***************** */}          
          <div className={styles.logoSection} foo="bar">        
              <Link to="/">          
                <img title="Home" src={logo} className={styles.logo} />          
              </Link>          
          </div>
          
          {/* Links Section */}
          {/* ************* */}
          <div className={styles.linkSection}>
            <Link 
              to="/" 
              className={styles.link}>
                Homestead
            </Link>
            <Link 
              to="/about" 
              className={styles.link}>
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
      </div>      
    );
  }
}

export default Header;


