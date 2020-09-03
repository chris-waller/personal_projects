// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { traceLifecycle } from 'react-lifecycle-visualizer';

// the Header component
import Header from './Header';

// css imports
import styles from './styles/layout.scss';

/**
 * This component is responsible for the overall site layout and styling.
 */
// eslint-disable-next-line react/prefer-stateless-function
class Layout extends Component {
  /**
   * Render.
   */
  render() {
    const { children } = this.props;

    return (
      <div className={styles.layoutContainer}>
        <div className={styles.layoutOverlay} />

        {/* Site Header */}
        <div className={styles.siteHeader}>
          <Header />
        </div>

        {/* Page Content */}
        <div className={styles.pageContentWrapper}>
          <div className={styles.pageContent}>
            {children}
          </div>
        </div>

      </div>
    );
  }
}

export default traceLifecycle(Layout);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
