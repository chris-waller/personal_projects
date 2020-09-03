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
// eslint-disable-next-line react/prefer-stateless-function
export default class Contact extends Component {
  render() {
    return (
      <Layout>
        <div>
          <span>Email:&nbsp;&nbsp;</span>
          <a href="mailto:chris.waller@worldwidewaller.ca">
            chris.waller@worldwidewaller(temp).ca
          </a>
        </div>
        <div>
          <span>Phone #:&nbsp;&nbsp;</span>
          <span>555-555-5555</span>
        </div>
        <div>
          <br />
          Developer Note: &nbsp;&nbsp;This page is currently being&nbsp;
          polished for prod-ready presentation.
        </div>
      </Layout>
    );
  }
}
