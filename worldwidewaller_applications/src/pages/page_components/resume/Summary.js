// npm imports
import React from 'react';

// styles imports
import styles from './styles/summary.scss';

/* eslint-disable max-len */
const Summary = () => (
  <div className={styles.section}>
    {/* Introduction */ }
    <div className={styles.sectionContent}>
      <div className={styles.header}>
        {/*
        <h1>Chris Waller</h1>
        <h2>Full Stack Web Application Developer & Tech Lead</h2>
        */}
      </div>
      <p>
        8+ years experience designing, developing, delivering and maintaining dynamic, cross-platform web applications.
        6+ years experience successfully working with both internal and external stakeholders to define project scope and
        deliverables. 5+ years experience in tech lead roles with a proven track record of delivering results. 5+ years
        experience deploying production-ready cloud-based web applications in AWS, Linux or Windows environments.
      </p>
      <ul className={styles.list}>
        <li>
          <p>Scalable, cross-platform web design, development & deployment</p>
          <ul>
            <li>ReactJs, JavaScript, CSS, HTML5, Core Java expertise</li>
          </ul>
        </li>
        <li>
          <p>Database administration, configuration & development</p>
          <ul>
            <li>SQL expertise including stored procedures, transactions, scheduled jobs, database backup & replication</li>
          </ul>
        </li>
        <li>
          <p>Requirements gathering, stakeholder demos, acceptance-test preparation, commissioning, troubleshooting</p>
        </li>
      </ul>
    </div>
  </div>
);

export default Summary;
