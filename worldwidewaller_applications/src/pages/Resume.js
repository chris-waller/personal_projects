// npm imports
import React, { Component } from 'react';

// style imports
import styles from './styles/resume.scss';
import collapsibleStyles from './styles/collapsible.scss';

// custom components
import Layout from '~/components/Layout';
import Collapsible from '~/components/Collapsible';
import Achievements from './page_components/resume/Achievments';
import Education from './page_components/resume/Education';
import Experience from './page_components/resume/Experience';
import Hobbies from './page_components/resume/Hobbies';
import Links from './page_components/resume/Links';
import ManagementSkills from './page_components/resume/ManagementSkills';
import Summary from './page_components/resume/Summary';
import TechnicalSkills from './page_components/resume/TechnicalSkills';

// utilities
import RESUME_SECTIONS from '~/utilities/constants';

// TODO: remove this before final version
/* eslint-disable max-len */
class Resume extends Component {
  /**
   * Constructor.
   */
  constructor() {
    super();
    const defaultOpen = false;

    this.state = {
      sectionsOpen: {
        achievements: defaultOpen,
        education: defaultOpen,
        experience: defaultOpen,
        hobbies: defaultOpen,
        links: defaultOpen,
        management: defaultOpen,
        summary: defaultOpen,
        technical: defaultOpen,
      },
    };

    this.expandCollapseAll = this.expandCollapseAll.bind(this);
    this.onTriggerClick = this.onTriggerClick.bind(this);
  }

  /**
   * User has clicked a trigger
   */
  onTriggerClick(sectionName, isOpen) {
    const { sectionsOpen } = this.state;
    switch (sectionName) {
      case RESUME_SECTIONS.SUMMARY:
        this.setState({
          sectionsOpen: {
            ...sectionsOpen,
            summary: isOpen,
          },
        });
        break;

      case RESUME_SECTIONS.TECHNICAL:
        this.setState({
          sectionsOpen: {
            ...sectionsOpen,
            technical: isOpen,
          },
        });
        break;

      case RESUME_SECTIONS.MANAGEMENT:
        this.setState({
          sectionsOpen: {
            ...sectionsOpen,
            management: isOpen,
          },
        });
        break;

      case RESUME_SECTIONS.ACHIEVEMENTS:
        this.setState({
          sectionsOpen: {
            ...sectionsOpen,
            achievements: isOpen,
          },
        });
        break;

      case RESUME_SECTIONS.EXPERIENCE:
        this.setState({
          sectionsOpen: {
            ...sectionsOpen,
            experience: isOpen,
          },
        });
        break;

      case RESUME_SECTIONS.LINKS:
        this.setState({
          sectionsOpen: {
            ...sectionsOpen,
            links: isOpen,
          },
        });
        break;

      case RESUME_SECTIONS.EDUCATION:
        this.setState({
          sectionsOpen: {
            ...sectionsOpen,
            education: isOpen,
          },
        });
        break;

      case RESUME_SECTIONS.HOBBIES:
        this.setState({
          sectionsOpen: {
            ...sectionsOpen,
            hobbies: isOpen,
          },
        });
        break;

      default:
        break;
    }
  }

  /**
   * Expands/collapses all sections.
   */
  expandCollapseAll(isOpen) {
    this.setState({
      sectionsOpen: {
        achievements: isOpen,
        education: isOpen,
        experience: isOpen,
        hobbies: isOpen,
        links: isOpen,
        management: isOpen,
        summary: isOpen,
        technical: isOpen,
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
      achievements, education, experience, hobbies, links, management, technical, summary,
    } = sectionsOpen;

    /* eslint-disable react/jsx-props-no-spreading */
    const pageCommponents = [

      // Summary Section
      <Collapsible
        key="summary"
        resumeSection={RESUME_SECTIONS.SUMMARY}
        trigger="Career Summary"
        {...classes}
        isOpen={summary}
        handleTriggerClick={this.onTriggerClick}
      >
        <Summary />
      </Collapsible>,

      // Technical Section
      <Collapsible
        key="technical"
        resumeSection={RESUME_SECTIONS.TECHNICAL}
        trigger="Technical Skills"
        {...classes}
        isOpen={technical}
        handleTriggerClick={this.onTriggerClick}
      >
        <TechnicalSkills />
      </Collapsible>,

      // Management Section
      <Collapsible
        key="management"
        resumeSection={RESUME_SECTIONS.MANAGEMENT}
        trigger="Management Skills"
        {...classes}
        isOpen={management}
        handleTriggerClick={this.onTriggerClick}
      >
        <ManagementSkills />
      </Collapsible>,

      // Management Section
      <Collapsible
        key="achieve"
        resumeSection={RESUME_SECTIONS.ACHIEVEMENTS}
        trigger="Professional Achievements"
        {...classes}
        isOpen={achievements}
        handleTriggerClick={this.onTriggerClick}
      >
        <Achievements />
      </Collapsible>,

      // Experience Section
      <Collapsible
        key="experience"
        resumeSection={RESUME_SECTIONS.EXPERIENCE}
        trigger="Professional Experience"
        {...classes}
        isOpen={experience}
        handleTriggerClick={this.onTriggerClick}
      >
        <Experience />
      </Collapsible>,

      // Links Section
      <Collapsible
        key="links"
        resumeSection={RESUME_SECTIONS.LINKS}
        trigger="Links"
        {...classes}
        isOpen={links}
        handleTriggerClick={this.onTriggerClick}
      >
        <Links />
      </Collapsible>,

      // Education Section
      <Collapsible
        key="education"
        resumeSection={RESUME_SECTIONS.EDUCATION}
        trigger="Education"
        {...classes}
        isOpen={education}
        handleTriggerClick={this.onTriggerClick}
      >
        <Education />
      </Collapsible>,

      // Hobbies Section
      <Collapsible
        key="hobbies"
        resumeSection={RESUME_SECTIONS.HOBBIES}
        trigger="Hobbies & Interests"
        {...classes}
        isOpen={hobbies}
        handleTriggerClick={this.onTriggerClick}
      >
        <Hobbies />
      </Collapsible>,
    ];
    /* eslint-enable react/jsx-props-no-spreading */

    const headerOptions = [
      <button key="collapse_all" type="button" onClick={() => this.expandCollapseAll(false)}>
        Collapse All
      </button>,
      <button key="expand_all" type="button" onClick={() => this.expandCollapseAll(true)}>
        Expand All
      </button>,
    ];

    return (
      <Layout
        headerOptions={headerOptions}
      >
        <div className={styles.container}>
          {pageCommponents}
        </div>
      </Layout>
    );
  }
}

export default Resume;
