// npm imports
import React, { Component } from 'react';

// css imports
import styles from './purpose.scss';

export default class Purpose extends Component {
  render() {
    return (
      <div className={styles.purposeContainer}>
        <p>The purpose of this application is threefold:</p>
        <ul>
          <li>Provide a unique way of presenting my resume to prospective employers</li>
          <li>Demonstrate that I can actually do what my resume claims I can do</li>
          <li>
            {`Establish a solid code-base for future projects so I can spend more of my
            future development time learning new skills rather than trying to solve a problem
            I have already run into`}
          </li>
        </ul>
      </div>
    );
  }
}
