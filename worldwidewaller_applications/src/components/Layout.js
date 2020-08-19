// npm imports
import React, { Component } from 'react';
import classNames from 'classnames';
import { MdExpandLess, MdExpandMore} from 'react-icons/md';
import DropDown from 'react-dropdown';
import { connect } from "react-redux";

// the Header component
import Header from './Header';

// css imports
import styles from './styles/layout.scss';

// utilities
import changeTheme from '../utilities/change-theme.js';
import {THEMES as SITE_THEMES} from '../utilities/themes/themes';

// redux actions
import {setClientOptions} from "../redux/actions";

/**
 * This component is responsible for the overall site layout and styling.
 * General site layout will be done here. The styling of the header and pages
 * themselves will be done in the specific classes.
 */
class Layout extends Component {

  /**
   * Constructor.
   */
  constructor(props) {
    super(props);

    //console.log("Selected theme", props.selectedTheme); 
    const siteThemes = this.createSiteThemes(SITE_THEMES);
    const selectedTheme = props.selectedTheme === null ?
      siteThemes.find(theme => theme.label === "Halloween") :
      siteThemes.find(theme => theme.label === props.selectedTheme);
    //console.log("Selected theme2", selectedTheme);
    

    changeTheme(classNames(styles.theme, selectedTheme.value));
    props.setClientOptions(selectedTheme.label);

    this.state =  {
      // This will need to go into a redux store so we can keep the menu
      // toggled between page changes
      headerCollapsed: false,
      siteThemes,
      selectedTheme,
    };

    this.collapseHeader = this.collapseHeader.bind(this);
    this.themeChanged = this.themeChanged.bind(this)
  }

  /**
   * Creates an array of theme styles
   */
  createSiteThemes(themes) {
    let siteThemes = [];
    themes.forEach(theme => {
      siteThemes.push(
        {
          value: this.getThemeStyle(theme),
          label: theme, 
          className: styles.menuItem 
        },
      );      
    });    
    return siteThemes;
  }

  getThemeStyle(themeName) {
    switch(themeName) {
      case 'Default':
        return styles.default_theme;
      case 'Forest':
        return styles.forest_theme;
      case 'Astronomy':
        return styles.greyscale_theme;
      case 'Halloween':
        return styles.pilgrim_theme;
      default:
        return styles.default_theme;              
    }
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
   * User has changed the theme.
   */
  themeChanged (option) {    
    //console.log("here");
    // no point on going further if the user selected the same theme
    if (option.label === this.state.selectedTheme.label) return;
    
    changeTheme(classNames(styles.theme, option.value));
    this.props.setClientOptions(option.label);
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
                options={this.state.siteThemes}
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
            <div className={styles.pageContentOverlay} />
            <div className={styles.pageContent}>
              {this.props.children}
            </div>
          </div>

      </div>
    );  
  }
}

const mapStateToProps = (state, ownProps = {}) => {
  return { 
    selectedTheme: state.setClientOptions.selectedTheme, 
  }
};

export default connect(
  mapStateToProps,
  {setClientOptions}
)(Layout);


