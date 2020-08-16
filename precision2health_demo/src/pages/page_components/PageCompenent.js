// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// custom compoonents
import Principles from './Principles';
import About from './About';
import Osteopathy from './Osteopathy';
import Services from './Services';
import Locations from './Locations';
import Contact from './Contact';
import Bio from './Bio';

// style imports
import styles from '../css/page-component.scss';

class PageComponent extends Component { 

  constructor(props) {
    super(props);
    this.getPageContent = this.getPageContent.bind(this);
  }

  /**
   * Create the page content fo the specified component
   */
  getPageContent() {
    const mainClass = (this.props.subType.toUpperCase() === "FULl") ? 
      styles.fullWidth : styles.partialWidth;

    switch(this.props.type.toUpperCase()) {
      case "ABOUT":
        return (
          <div className={mainClass}>
            <About />
          </div>          
        )
        break;

      case "PRINCIPLES":
        return (
          <div className={mainClass}>
            <Principles />
          </div>          
        )
        break;

      default:

    }

  }

  /**
   * Render.
   */
  render() {
    const pageContent = this.getPageContent();
    return (
      <div>
        {pageContent}
      </div>
    );
  }
}

export default PageComponent;

PageComponent.propTypes = {
  type: PropTypes.string.isRequired,
  subType: PropTypes.string.isRequired,
};