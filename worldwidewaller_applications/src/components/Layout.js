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
import {THEME_NAMES, getSiteThemes, changeTheme} from '../utilities/theme_helpers';

// redux actions
import {setTheme} from "../redux/actions";

/**
 * This component is responsible for the overall site layout and styling.
 * General site layout will be done here. The styling of the header and pages
 * themselves will be done in the specific classes.
 */
class Layout extends Component {

  // toggle the site's default theme here
  defaultThemeName = THEME_NAMES.HALLOWEEN;

  /**
   * Constructor.
   */
  constructor(props) {
    super(props);

    // get theme info for the dropdown -- will eventually want to rename this
    const siteThemes = getSiteThemes();    
    const selectedTheme = props.selectedTheme === null ?
      siteThemes.find(theme => theme.label === this.defaultThemeName) :
      siteThemes.find(theme => theme.label === props.selectedTheme);

    // set the initial theme
    this.updateSiteTheme(props.setTheme, selectedTheme.label, selectedTheme.value);
    
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
   * Expand/collapse the header
   */
  collapseHeader() {
    this.setState({
      headerCollapsed: !this.state.headerCollapsed
    });
  }

  /**
   * Updates the site's theme in the DOM and informs redux of the change.
   */
  updateSiteTheme(setTheme, themeName, themeStyle) {
    changeTheme(classNames(styles.theme, themeStyle));
    setTheme(themeName);
  }

  /**
   * User has changed the theme with the dropdown.
   */
  themeChanged (option) {        
    // no point on going further if the user selected the same theme
    if (option.label === this.state.selectedTheme.label) return;
    
    this.updateSiteTheme(this.props.setTheme, option.label, option.value);
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
    selectedTheme: state.setTheme.selectedTheme, 
  }
};

export default connect(
  mapStateToProps,
  {setTheme}
)(Layout);


