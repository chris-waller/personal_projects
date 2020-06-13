// npm imports
import React, { Component } from 'react';

// the Header component
import Header from './Header';

// css imports
import styles from './styles/layout.scss';

/**
 * This component is responsible for the overall site layout and styling.
 * General site layout will be done here. The styling of the header and pages
 * themselves will be done in the specific classes.
 */
class Layout extends Component {
  
  /**
   * Render.
   */
  render() {    
    return (
      <div className={styles.layout}>
          
          {/* Site header */}
          <div className={styles.header}>
            <Header />
          </div>
          
          {/* Page content */}
          <div className={styles.pageContentWrapper}>
            <div className={styles.pageContent}>
              {this.props.children}
            </div>
          </div>

      </div>
    );  
  }

}

export default Layout;