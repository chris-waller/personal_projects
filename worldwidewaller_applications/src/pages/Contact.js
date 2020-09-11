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
        <div className={styles.contactContainer}>
          <h1>Chris Waller</h1>
          <h2>Full Stack Web Application Developer</h2>

          <div className={styles.contactEmail}>
            <a href="mailto:chris.waller@worldwidewaller.ca">
              chris.waller@worldwidewaller.ca
            </a>
          </div>

          <div>
            <h3>226-791-8618</h3>
          </div>
        </div>
      </Layout>
    );
  }
}
