// npm imports
import React, { Component } from 'react';
import classNames from 'classnames';
import { MdExpandLess, MdExpandMore} from 'react-icons/md';
import DropDown from 'react-dropdown';

// the Header component
import Header from './Header';

// css imports
import styles from './styles/layout.scss';

// utilities
import changeTheme from '../utilities/change-theme.js';

/**
 * This component is responsible for the overall site layout and styling.
 * General site layout will be done here. The styling of the header and pages
 * themselves will be done in the specific classes.
 */
export default class Layout extends Component {

  THEMES = [
    { value: styles.greyscale_theme, label: 'Greyscale', className: styles.menuItem },
    { value: styles.default_theme, label: 'Ocean', className: styles.menuItem },    
    { value: styles.pilgrim_theme, label: 'Pilgrim', className: styles.menuItem },
  ];
  
  // set the default site theme here
  DEFAULT_THEME = this.THEMES.find(theme => theme.value === styles.greyscale_theme);
  
  /**
   * Constructor.
   */
  constructor() {
    super();

    console.log(this.DEFAULT_THEME);

    this.state =  {
      // This will need to go into a redux store so we can keep the menu
      // toggled between page changes
      headerCollapsed: false,      
      selectedTheme: { value: this.DEFAULT_THEME.value, label: this.DEFAULT_THEME.label}
    };

    // This will need to go into a redux store so we can keep the theme
    // between page changes
    changeTheme(classNames(styles.theme, this.DEFAULT_THEME.value));

    this.collapseHeader = this.collapseHeader.bind(this);
    this.themeChanged = this.themeChanged.bind(this)
  }

  /**
   * Expand/collapse the header
   */
  collapseHeader() {
    this.setState({
      headerCollapsed: !this.state.headerCollapsed
    });
  }  

  /**
   * User has changed the themed
   * @param {} option 
   */
  themeChanged (option) {    
    // no point on going further if the user selected the same theme
    if (option.label === this.state.selectedTheme.label) return;
    
    changeTheme(classNames(styles.theme, option.value));
    this.setState({selectedTheme: option})
  }
  
  /**
   * Render.
   */
  render() {

    // adjust styles for header expansion/collapse
    const collapsedStyle = this.state.headerCollapsed ? styles.collapsed : null;    
    const collapseText = this.state.headerCollapsed ? "Expand Menu" : "Collapse Menu";
    const collapseIcon = React.createElement(
      this.state.headerCollapsed ? MdExpandMore : MdExpandLess,
      {
        className : styles.collapseIcon,
      },
      null
    );

    return (
      <div className={classNames(styles.layout, collapsedStyle)}>
          
          {/* Site Header */}
          <div className={classNames(styles.siteHeader, collapsedStyle)}>
            <Header />
            <div className={styles.selectTheme}>
              <h5 className={styles.selectTheme}>Select Theme</h5>
              <DropDown
                options={this.THEMES}
                onChange={this.themeChanged}
                value={this.state.selectedTheme}
                placeholder="Select an option"
                className={styles.dropDown}
                placeholderClassName={ styles.dropDownPlaceholder}
                menuClassName={ styles.dropDownMenu } 
              />
            </div>
          </div>

          {/* Collapse Header */}
          <div
            className={classNames(styles.collapseHeader, collapsedStyle)}            
            title={collapseText}
          >
            <span
              onClick={this.collapseHeader}
            >
              {collapseIcon}
            </span>
          </div>
          
          {/* Page Content */}
          <div className={classNames(styles.pageContentWrapper, collapsedStyle)}>
            <div className={styles.pageContent}>
              {this.props.children}
            </div>
          </div>

      </div>
    );  
  }
}