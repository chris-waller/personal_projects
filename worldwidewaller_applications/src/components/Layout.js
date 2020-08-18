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

const THEMES = [
  { value: styles.theme1, label: 'Theme1' },
  { value: styles.theme2, label: 'Theme2', className: 'myOptionClassName' },
];


/**
 * This component is responsible for the overall site layout and styling.
 * General site layout will be done here. The styling of the header and pages
 * themselves will be done in the specific classes.
 */
export default class Layout extends Component {

  /**
   * Constructor.
   */
  constructor() {
    super();

    this.state =  {
      // This will need to go into a redux store so we can keep the menu
      // toggled between page changes
      headerCollapsed: false,      
      selectedTheme: { value: THEMES[0].value, label: THEMES[0].label}
    };

    // This will need to go into a redux store so we can keep the theme
    // between page changes
    changeTheme(styles.theme1);

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

  toggleThemes() {



    if (this.refs.selectedTheme.props.value === styles.theme1) {      
      changeTheme(styles.theme2);
      this.setState({
        selectedTheme: styles.theme2,
      });      
    } else {            
      changeTheme(styles.theme1);
      this.setState({
        selectedTheme: styles.theme1,
      });      
    }
  }

  themeChanged (option) {    
    if (option.label === this.state.selectedTheme.label) return;
    changeTheme(option.value);
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
            <DropDown
              options={THEMES}
              onChange={this.themeChanged}
              value={this.state.selectedTheme}
              placeholder="Select an option"
              //className={ toggleClassName ? 'my-custom-class' : '' }
              //placeholderClassName={ togglePlaholderClassName ? 'my-custom-class' : '' }
              //menuClassName={ toggleMenuClassName ? 'my-custom-class' : '' }
            />
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