// npm imports
import React, { Component } from 'react';

// custom components
import Layout from '~/components/Layout';

// css imports
import styles from './styles/contact.scss';

export default class Contact extends Component {
  render() {
    return (
      <Layout>
        <div>
          <h2 className={styles.title}>
            Chris Waller,&nbsp;
            <span>
              full stack web application developer
            </span>
          </h2>
          <span>Email:&nbsp;&nbsp;</span>
          <a href="mailto:chris.waller@worldwidewaller.ca">
            chris.waller@worldwidewaller.ca
          </a>
        </div>
        <div>
          <span>Phone #:&nbsp;&nbsp;</span>
          <span>226-791-8618</span>
        </div>
        <div>
          <br />
          {`Developer Note: This is just a placeholder page
          as I continue working on the web application.`}
        </div>
      </Layout>
    );
  }
}
