// npm imports
import React from 'react';

// styles imports
import styles from './styles/summary.scss';

/* eslint-disable max-len */
const Summary = () => (
  <div className={styles.section}>
    <p>
      8+ years experience designing, developing, delivering and maintaining dynamic, cross-platform web applications.
      6+ years experience successfully working with both internal and external stakeholders to define project scope and
      deliverables. 5+ years experience in tech lead roles with a proven track record of delivering results. 5+ years
      experience deploying production-ready cloud-based web applications in AWS, Linux or Windows environments.
    </p>
    <ul className={styles.list}>
      <li>
        <p className={styles.header}>Scalable, cross-platform web design, development & deployment</p>
        <ul>
          <li>ReactJs, JavaScript, CSS, HTML5, Core Java expertise</li>
        </ul>
      </li>
      <li>
        <p className={styles.header}>Database administration, configuration & development</p>
        <ul>
          <li>SQL expertise including stored procedures, transactions, scheduled jobs, database backup & replication</li>
        </ul>
      </li>
      <li>
        <p className={styles.header}>Requirements gathering, stakeholder demos, acceptance-test preparation, commissioning, troubleshooting</p>
        <ul>
          <li>Full & constant SDLC expsosure througout a 9+ year career</li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Summary;
