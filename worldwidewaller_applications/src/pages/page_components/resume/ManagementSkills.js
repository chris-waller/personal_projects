// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// style imports
import styles from './styles/management_skills.scss';

/* eslint-disable max-len, react/prefer-stateless-function */
export default class ManagementSkills extends Component {
  render() {
    const pageText = {
      li1: 'Onboard new team members (design docs, dev/build environment setups)',
      li2: 'Interviews for management, senior, intermediate, junior and co-op positions',
      li3: `Interface with individuals from a variety of different industries, with various degrees of
       technical background: UI/UX designers, testers, technical support, marketing, legal,
        customers, partners, end-users`,
      li4: 'Agile development as a preferred project methodology',
      li5: 'Scope management, including managing the dreaded scope-creep',
      li6: 'Project-based meeting organization (local or remote)',
      li7: 'Story creation, tracking & estimates using JIRA',
      li8: 'Code reviews, build checks, production deployment backup & installation',
    };
    Object.keys(pageText).forEach((key) => {
      const highligtedText = this.props.getHighlightedText(pageText[key]);
      pageText[key] = highligtedText;
    });
    return (
      <div className={styles.container}>
        <ul className={styles.list}>
          <p className={styles.header}>People Management:</p>
          <li>{pageText.li1}</li>
          <li>{pageText.li2}</li>
          <li>{pageText.li3}</li>
        </ul>
        <ul className={styles.list}>
          <p className={styles.header}>Project Management:</p>
          <li>{pageText.li4}</li>
          <li>{pageText.li5}</li>
          <li>{pageText.li6}</li>
          <li>{pageText.li7}</li>
          <li>{pageText.li8}</li>
        </ul>
      </div>
    );
  }
}

ManagementSkills.propTypes = {
  getHighlightedText: PropTypes.func.isRequired,
};
