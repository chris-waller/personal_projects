// npm imports
import React, { Component } from 'react';

// custom components
import Layout from '~/components/Layout';

// css imports
// import styles from './styles/header.scss';

/**
 * This component is responsible for displaying the site header.
 * The header will be replaced with a humburger menu at a specified screen size
 */
/* eslint-disable react/prefer-stateless-function */
class Contact extends Component {
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
        Contact Me
      </Layout>
    );
  }
}
export default Contact;
