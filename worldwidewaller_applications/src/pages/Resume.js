// npm imports
import React, { Component } from 'react';
import classNames from 'classnames';
// import { Link } from 'react-router-dom';

// style imports
import styles from './styles/resume.scss';

// custom components
import Layout from '../components/Layout';

/* eslint-disable */
class Resume extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.container}>
          <div className={classNames(styles.section, styles.header)}>
            <h1>Chris Waller</h1>
            <h2>Full Stack Web Application Devloper & Tech Lead</h2>
            
            {/* Introduction */ }
            <div className={styles.sectionContent}>
              <p>
                8+ years experience designing, developing, delivering and maintaining dynamic, cross-platform web applications.
                6+ years experience successfully working with both internal and external stakeholders to define project scope and
                deliverables. 5+ years experience in tech lead roles with a proven track record of delivering results. 5+ years
                experience deploying production-ready cloud-based web applications in AWS, Linux or Windows environments.
              </p>
              <ul className={styles.list}>
                <li>
                  <p>Scalable, cross-platform web design, development & deployment</p>
                  <li className={styles.listLvl2}>ReactJs, JavaScript, CSS, HTML5, Core Java expertise</li>
                  <li className={styles.listLvl2}>Add a 2nd point</li>
                </li>
                <li>
                  <p>Database administration, configuration & development</p>
                  <li className={styles.listLvl2}>SQL expertise including stored procedures, transactions, scheduled jobs, database backup & replication</li>
                </li>
                <li>
                  <p>Requirements gathering, stakeholder demos, acceptance-test preparation, commissioning, troubleshooting (change this)</p>
                  <li className={styles.listLvl2}>Some other info here</li>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Technical Skills */}
          <div className={styles.section}>Technical Skills</div>
          <div className={styles.section}>Managment Skills</div>
          <div className={styles.section}>Professional Achievments</div>
          <div className={styles.section}>Professional Expertise</div>
          <div className={styles.section}>Links</div>
          <div className={styles.section}>Education</div>
          <div className={styles.section}>Hobbies/Interests</div>
        </div>
      </Layout>
    );
  }
}

export default Resume;
