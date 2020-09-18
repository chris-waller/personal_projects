// npm imports
import React, { Component } from 'react';

// css imports
import styles from './styles/current-features.scss';

export default class CurrentFeatures extends Component {
  render() {
    return (
      <div className={styles.currentFeaturesContainer}>
        The site current features
      </div>
    );
  }
}
