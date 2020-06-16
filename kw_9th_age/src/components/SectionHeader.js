// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


// css imports
import styles from "./styles/section-header.scss";

/**
 * A simple component to display a section header.
 */
class SectionHeader extends Component { 


  /**
   * Render.
   */ 
  render() {   
    const props=this.props
    const HeaderText =  React.createElement(props.headerType, {className:styles.text}, props.text);
    const HeaderIcon = React.createElement(props.icon.type,
      {className : classNames(styles.icon, styles.scrollIcon)},
      null
    );
    
    return (
      <div className={styles.sectionHeader}>
        {HeaderIcon}
        {HeaderText}
        {HeaderIcon}
      </div>
    );
  }
}

export default SectionHeader;

SectionHeader.propTypes = {
  headerType: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
}
