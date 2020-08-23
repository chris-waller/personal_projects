// npm imports
import React, { Component } from 'react';
import classNames from 'classnames';

// style imports
import styles from './styles/resume.scss';
import collapsibleStyles from './styles/collapsible.scss';

// custom components
import Layout from '../components/Layout';
import Achievements from './page_components/Achievments';
import Education from './page_components/Education';
import Experience from './page_components/Experience';
import Hobbies from './page_components/Hobbies';
import Links from './page_components/Links';
import ManagementSkills from './page_components/ManagementSkills';
import TechnicalSkills from './page_components/TechnicalSkills';

// TODO: remove this before final version
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
    const { isCollapsed } = !this.state;
    this.setState({
      isCollapsed,
    });
  }

  /**
   * Render.
   */
  render() {
    const classes = {
      sectionClassName: styles.section,
      triggerClassName: collapsibleStyles.trigger,
      openClassName: collapsibleStyles.open,
      contentClassName: collapsibleStyles.content,
    };

    /* eslint-disable react/jsx-props-no-spreading */
    const pageCommponents = [
      <TechnicalSkills key="tech" {...classes} />,
      <ManagementSkills key="management" {...classes} />,
      <Achievements key="achieve" {...classes} />,
      <Experience key="experience" {...classes} />,
      <Links key="links" {...classes} />,
      <Education key="education" {...classes} />,
      <Hobbies key="hobbies" {...classes} />,
    ];
    /* eslint-enable react/jsx-props-no-spreading */

    return (
      <Layout>
        <div className={styles.container}>
          <div className={classNames(styles.section, styles.header)}>
            <h1>Chris Waller</h1>
            <h2>Full Stack Web Application Developer & Tech Lead</h2>

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

          {pageCommponents}

        </div>
      </Layout>
    );
  }
}

export default Resume;
