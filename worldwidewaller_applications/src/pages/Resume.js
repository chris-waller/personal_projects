// npm imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
import Button from '~/components/Button';

// resource imports
import resumePdf from '~/resources/resume.pdf';

const RESUME_SECTIONS = {
  ACHIEVEMENTS: {
    name: 'achievements',
    component: <Achievements />,
  },
  EDUCATION: {
    name: 'education',
    component: <Education />,
  },
  EXPERIENCE: {
    name: 'experience',
    component: <Experience />,
  },
  HOBBIES: {
    name: 'hobbies',
    component: <Hobbies />,
  },
  LINKS: {
    name: 'links',
    component: <Links />,
  },
  MANAGEMENT: {
    name: 'management',
    component: <ManagementSkills />,
  },
  SUMMARY: {
    name: 'summary',
    component: <Summary />,
  },
  TECHNICAL: {
    name: 'technical',
    component: <TechnicalSkills />,
  },
};

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
  onTriggerClick(section, isOpen) {
    const { sectionsOpen } = this.state;

    this.setState({
      sectionsOpen: {
        ...sectionsOpen,
        [section.name]: isOpen,
      },
    });
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
   * Create the provided page component.
   */
  createPageComponent(sectionType, trigger) {
    const sectionOpen = this.state.sectionsOpen[sectionType.name];
    const classes = {
      sectionClassName: styles.section,
      triggerClassName: collapsibleStyles.trigger,
      openClassName: collapsibleStyles.open,
      contentClassName: collapsibleStyles.content,
    };

    return (
      <Collapsible
        key={sectionType.name}
        resumeSection={sectionType}
        trigger={trigger}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...classes}
        isOpen={sectionOpen}
        handleTriggerClick={this.onTriggerClick}
      >
        {sectionType.component}
      </Collapsible>
    );
  }

  /**
   * Render.
   */
  render() {
    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.pageOptions}>
            <Button
              text="Collapse All"
              onClick={() => this.expandCollapseAll(false)}
              className={styles.pageOption}
            />
            <Button
              text="Expand All"
              onClick={() => this.expandCollapseAll(true)}
              className={styles.pageOption}
            />
            {/* TODO: This will eventually need to be put into a
            proper API call when I have a server setup */ }
            <Link to={resumePdf} target="_blank" download>
              <Button
                type="button"
                text="Downlaod PDF"
              />
            </Link>
          </div>
          {this.createPageComponent(RESUME_SECTIONS.SUMMARY, 'Career Summary')}
          {this.createPageComponent(RESUME_SECTIONS.TECHNICAL, 'Technical Skills')}
          {this.createPageComponent(RESUME_SECTIONS.MANAGEMENT, 'Management Skills')}
          {this.createPageComponent(RESUME_SECTIONS.ACHIEVEMENTS, 'Professional Achievements')}
          {this.createPageComponent(RESUME_SECTIONS.EXPERIENCE, 'Professional Experience')}
          {this.createPageComponent(RESUME_SECTIONS.LINKS, 'Links')}
          {this.createPageComponent(RESUME_SECTIONS.EDUCATION, 'Education')}
          {this.createPageComponent(RESUME_SECTIONS.HOBBIES, 'Hobbies')}
        </div>
      </Layout>
    );
  }
}

export default Resume;
