// npm imports
import React, { Component } from 'react';

// style imports
import styles from './styles/resume.scss';
import collapsibleStyles from './styles/collapsible.scss';

// custom components
import Layout from '~/components/Layout';
import Achievements from './page_components/resume/Achievments';
import Education from './page_components/resume/Education';
import Experience from './page_components/resume/Experience';
import Hobbies from './page_components/resume/Hobbies';
import Links from './page_components/resume/Links';
import ManagementSkills from './page_components/resume/ManagementSkills';
import TechnicalSkills from './page_components/resume/TechnicalSkills';

// TODO: remove this before final version
/* eslint-disable max-len, react/no-unused-state */
class Resume extends Component {
  /**
   * Constructor.
   */
  constructor() {
    super();

    this.state = {
      sectionsOpen: {
        achievementsOpen: false,
        educationOpen: false,
        experienceOpen: false,
        hobbiesOpen: false,
        linksOpen: false,
        managementOpen: false,
        technicalOpen: false,
      },
    };

    this.expandCollapseAll = this.expandCollapseAll.bind(this);
  }

  /**
   * Expands/collapses all sections.
   */
  expandCollapseAll(isOpen) {
    this.setState({
      sectionsOpen: {
        achievementsOpen: isOpen,
        educationOpen: isOpen,
        experienceOpen: isOpen,
        hobbiesOpen: isOpen,
        linksOpen: isOpen,
        managementOpen: isOpen,
        technicalOpen: isOpen,
      },
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

    const { sectionsOpen } = this.state;
    const {
      achievementsOpen, educationOpen, experienceOpen, hobbiesOpen, linksOpen, managementOpen, technicalOpen,
    } = sectionsOpen;

    /* eslint-disable react/jsx-props-no-spreading */
    const pageCommponents = [
      <TechnicalSkills key="tech" {...classes} isOpen={!technicalOpen} />,
      <ManagementSkills key="management" {...classes} isOpen={!managementOpen} />,
      <Achievements key="achieve" {...classes} isOpen={!achievementsOpen} />,
      <Experience key="experience" {...classes} isOpen={!experienceOpen} />,
      <Links key="links" {...classes} isOpen={!linksOpen} />,
      <Education key="education" {...classes} isOpen={!educationOpen} />,
      <Hobbies key="hobbies" {...classes} isOpen={!hobbiesOpen} />,
    ];
    /* eslint-enable react/jsx-props-no-spreading */

    return (
      <Layout>
        <div className={styles.container}>
          <button type="button" onClick={() => this.expandCollapseAll(true)}>
            Collapse All
          </button>
          <button type="button" onClick={() => this.expandCollapseAll(false)}>
            Expand All
          </button>
          <div className={styles.section}>
            {/* Introduction */ }
            <div className={styles.sectionContent}>
              <div className={styles.header}>
                <h1>Chris Waller</h1>
                <h2>Full Stack Web Application Developer & Tech Lead</h2>
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

          {pageCommponents}

        </div>
      </Layout>
    );
  }
}

export default Resume;
