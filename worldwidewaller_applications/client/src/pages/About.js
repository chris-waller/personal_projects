// npm imports
import React, { Component } from 'react';

// custom components
import Layout from '~/components/Layout';
import Purpose from '~/pages/page_components/purpose/Purpose';
// import CurrentFeatures from '~/pages/page_components/features/CurrentFeatures';
import UpcomingFeatures from '~/pages/page_components/features/UpcomingFeatures';

// css imports
import styles from './styles/about.scss';

export default class About extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.aboutContainer}>
          <h1>What is This?</h1>
          <h2>Purpose</h2>
          <Purpose />

          {/*
          <h2>Current Features</h2>
          <CurrentFeatures />
          */}

          <h2>Upcoming Features</h2>
          <UpcomingFeatures />
        </div>
      </Layout>
    );
  }
}
