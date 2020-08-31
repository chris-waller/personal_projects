// npm imports
import React, { Component } from 'react';

// custom components
import Layout from '~/components/Layout';
import ThemeSelector from '~/components/ThemeSelector';

// css imports
import styles from './styles/settings.scss';

/* eslint-disable react/prefer-stateless-function */
class Settings extends Component {
  /**
   * Constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      foo: 'bar',
    };
  }

  /**
   * Render.
   */
  render() {
    console.log(this.state.foo);
    return (
      <Layout>
        <div className={styles.container}>
          <h1 className={styles.header}>Application Settings</h1>
          <div className={styles.themeSelector}>
            <ThemeSelector />
          </div>
          <div>
            <br />
            Developer Note: &nbsp;This page is more of a placeholder until I get a proper&nbsp;
            back-end setup so I can save user-settings to a db.
            <br />
            At the moment, this is purely redux client-side session management only.
          </div>
        </div>
      </Layout>
    );
  }
}
export default Settings;
