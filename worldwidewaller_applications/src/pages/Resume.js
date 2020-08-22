// npm imports
import React, { Component } from 'react';
import classNames from 'classnames';
import Collapsible from 'react-collapsible';
// import { Link } from 'react-router-dom';

// style imports
import styles from './styles/resume.scss';

// custom components
import Layout from '../components/Layout';

/* eslint-disable max-len, react/no-unused-state */
class Resume extends Component {
  /**
   * Constructor.
   */
  constructor() {
    super();

    this.state = {
      isCollapsed: false,
    };
  }

  /**
   * Toggle function for collapsible section.
   */
  collapseClicked() {
    console.log('here');
    const { isCollapsed } = !this.state;
    this.setState({
      isCollapsed,
    });
  }

  /**
   * Render.
   */
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
                  <ul>
                    <li>ReactJs, JavaScript, CSS, HTML5, Core Java expertise</li>
                    <li>Add a 2nd point</li>
                  </ul>
                </li>
                <li>
                  <p>Database administration, configuration & development</p>
                  <ul>
                    <li>SQL expertise including stored procedures, transactions, scheduled jobs, database backup & replication</li>
                  </ul>
                </li>
                <li>
                  <p>Requirements gathering, stakeholder demos, acceptance-test preparation, commissioning, troubleshooting (change this)</p>
                  <ul>
                    <li>Some other info here</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <Collapsible
            trigger="Managment Skills"
            className={styles.section}
            openedClassName={styles.section}
            triggerClassName={styles.trigger}
            triggerOpenedClassName={styles.trigger}
          >
            <p>Skill 1</p>
          </Collapsible>

          {/* Technical Skills */}
          <Collapsible
            trigger="Professional Achievments"
            className={styles.section}
            openedClassName={styles.section}
            triggerClassName={styles.trigger}
            triggerOpenedClassName={styles.trigger}
          >
            <p>Skill 1</p>
          </Collapsible>

          {/* Technical Skills */}
          <Collapsible
            trigger="Professional Expertise"
            className={styles.section}
            openedClassName={styles.section}
            triggerClassName={styles.trigger}
            triggerOpenedClassName={styles.trigger}
          >
            <p>Skill 1</p>
          </Collapsible>

          {/* Technical Skills */}
          <Collapsible
            trigger="Links"
            className={styles.section}
            openedClassName={styles.section}
            triggerClassName={styles.trigger}
            triggerOpenedClassName={styles.trigger}
          >
            <p>Skill 1</p>
          </Collapsible>

          {/* Technical Skills */}
          <Collapsible
            trigger="Education"
            className={styles.section}
            openedClassName={styles.section}
            triggerClassName={styles.trigger}
            triggerOpenedClassName={styles.trigger}
          >
            <p>Skill 1</p>
          </Collapsible>

          {/* Technical Skills */}
          <Collapsible
            trigger="Hobbies/Interests"
            className={styles.section}
            openedClassName={styles.section}
            triggerClassName={styles.trigger}
            triggerOpenedClassName={styles.trigger}
          >
            <p>Skill 1</p>
          </Collapsible>

          {/* Technical Skills */}
          <Collapsible
            trigger="Technical Skills"
            className={styles.section}
            openedClassName={styles.section}
            triggerClassName={styles.trigger}
            triggerOpenedClassName={styles.trigger}
          >
            <p>Skill 1</p>
          </Collapsible>

        </div>
      </Layout>
    );
  }
}

export default Resume;
