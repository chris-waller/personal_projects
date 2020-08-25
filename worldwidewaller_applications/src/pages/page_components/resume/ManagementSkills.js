// npm imports
import React from 'react';

// style imports
import styles from './styles/management_skills.scss';

const ManagementSkills = () => (
  <div>
    <ul className={styles.list}>
      <span>People Management:</span>
      <li>Onboard new team members (design docs, dev/build environment setups)</li>
      <li>Interviews for management, senior, intermediate, junior and co-op positions</li>
      <li>
        Interface with individuals from a variety of different industries, with various degrees of
        technical background: UI/UX designers, testers, technical support, marketing, legal,
        customers, partners, end-users
      </li>
    </ul>
    <ul className={styles.list}>
      <span>Project Management:</span>
      <li>Agile development as a preferred project methodology</li>
      <li>Scope management, including managing the dreaded scope-creep</li>
      <li>Project-based meeting organization (local or remote)</li>
      <li>Story creation, tracking & estimates using JIRA</li>
      <li>Code reviews, build checks, production deployment backup & installation</li>
    </ul>
  </div>
);

export default ManagementSkills;
