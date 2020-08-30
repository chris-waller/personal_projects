// npm imports
import React, { Component } from 'react';

// custom components
import Layout from '~/components/Layout';
import ThemeSelector from '~/components/ThemeSelector';

// css imports
// import styles from './styles/settings.scss';

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
        <h1>Application Settings</h1>
        <ThemeSelector />
      </Layout>
    );
  }
}
export default Settings;
