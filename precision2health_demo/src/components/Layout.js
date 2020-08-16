// npm imports
import React, { Component } from 'react';

// the Header component
import Header from './Header';

// style imports
import styles from './css/layout.scss';

/**
 * This component is responsible for the overall site layout and styling.
 */
class Layout extends Component {
  
  /**
   * Render.
   */
  render() {    
    return (
      <div className={styles.layout}>
          
          {/* the site header */}
          <div className={styles.header}>
            <div className={styles.headerOverlay}>
              <Header />
            </div>
          </div>
          
          {/* the page content */}
          <div>
            {this.props.children}
          </div>
          
      </div>
    );  
  }

}

export default Layout;