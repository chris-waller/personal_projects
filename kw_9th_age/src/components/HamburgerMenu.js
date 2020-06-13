// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside'
import { Link } from 'react-router-dom';

// css imports
import styles from './styles/hamburger-menu.scss';

// image imports
import cancelIcon from '../images/cancel-icon.png';

const menuItems = [
  {url: "/", text: "Home"},
  {url: "/about", text: "About Us"},  
];

/**
 * This component creates a sliding menu with an icon to initiate *  
 */
class HamburgerMenu extends Component {

  /**
   * Constructor.
   */
  constructor() {
    super();

    this.state = {
      menuOpen: false,      
    }
  }
  
  /**
   * This is a required function for when the user clicks off of the component.
   * It will be used to close the menu.
   */
  handleClickOutside() {
    this.toggleMenu(false);
  }

  /**
   * User is opening/closing the menu.
   * @param openMenu if true, opening the menu
   */
  toggleMenu(openMenu) {
    this.setState({
      menuOpen: openMenu
    });
  }

  /**
   * Renders the menu.
   */
  renderMenu() {
    // figure out which classes to add to the 
    let menuClasses = styles.menu;
    menuClasses = this.state.menuOpen ? 
      // menu open
      menuClasses :
      // menu closed 
      menuClasses+= " " + styles.hide;

    return (
      <div className={menuClasses} >
        
        {/* cancel icon */}
        <div className={styles.cancelIcon}>
          <img 
            src={cancelIcon}           
            className={styles.cancelIcon}
            title="Close Menu"
            onClick={() => this.toggleMenu(false)}
          />
        </div>
        
        {/* Render the menu items here */}
        {/* ************************** 
        <div className={styles.menuItems}>
          {menuItems.map(item => {
            return (
              <Link to={item.url} className={styles.menuItem} key={item.url} >
                <h5 title={item.text} > 
                  {item.text} 
                </h5>
              </Link>
            );
          })}       
        </div>
        */}
        
      </div>
    );
  }

  /**
   * Render.
   */
  render() {
    return(
      <div>
        <img 
          src={this.props.iconUrl} 
          className={styles.icon}
          title="Open Menu"
          onClick={() => this.toggleMenu(!this.state.menuOpen)}
        />        
        {this.renderMenu()}
      </div>
    );
  }

}

export default enhanceWithClickOutside(HamburgerMenu);

// declare all prop types
HamburgerMenu.propTypes = {    
  iconUrl: PropTypes.string.isRequired,
};