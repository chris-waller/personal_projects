// npm imports
import React, { Component } from 'react';
import enhanceWithClickOutside from 'react-click-outside'
import { Link } from 'react-router-dom';
import { FaRegWindowClose, FaAlignJustify } from 'react-icons/fa';

// css imports
import styles from './styles/hamburger-menu.scss';

const menuItems = [
  {url: "/", text: "Homestead", title: "Home"},
  {url: "/map", text: "The Known World", title: "Map"},
  {url: "/campaign", text: "War Status", title: "Campaign"},
  {url: "/members", text: "The Village", title: "Members"},
  {url: "/about", text: "Town Crier", title: "About this site"},  
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
   * @param {boolean} openMenu if true, opening the menu
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
      <div className={menuClasses}>
        
        {/* cancel icon */ }
        <div className={styles.cancelIcon}>
          <FaRegWindowClose 
           onClick={() => this.toggleMenu(false)}
           title="Close Menu"
           className={styles.cancelIcon}
          />          
        </div>
        
        {/* Render the menu items here */}
        {/* ************************** */}
        <div className={styles.menuItemsWrapper}>
          <div className={styles.menuItems}>
            {menuItems.map(item => {
              return (
                
                  <Link to={item.url} key={item.url} >
                    <div className={styles.menuItem} key={item.text}>
                    <h5 title={item.title} > 
                      {item.text} 
                    </h5>
                    </div>
                  </Link>                
              );
            })}
          </div>       
        </div>        
      </div>
    );
  }

  /**
   * Render.
   */
  render() {
    return(
      <div className={styles.hamburgerMenu}>
        <FaAlignJustify 
          onClick={() => this.toggleMenu(!this.state.menuOpen)}
          title="Open Menu"
          className={styles.hamburgerIcon}
        />
        {this.renderMenu()}
      </div>
    );
  }

}

export default enhanceWithClickOutside(HamburgerMenu);