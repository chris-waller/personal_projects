// npm imports
import React, { Component } from 'react';

// custom components
import Layout from '~/components/Layout';
import ThemeSelector from '~/components/ThemeSelector';

// css imports
import styles from './styles/settings.scss';

export default class Settings extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.settingsContainer}>
          <h1>Application Settings</h1>
          <div className={styles.settingsThemeSelector}>
            <ThemeSelector />
          </div>
          <div>
            <br />
            {`Developer Note: This page is more of a placeholder until I get a proper
            back-end setup so I can save user-settings to a db.`}
            <br />
            <br />
            At the moment, this is purely redux client-side session management only.
          </div>
        </div>
      </Layout>
    );
  }
}
