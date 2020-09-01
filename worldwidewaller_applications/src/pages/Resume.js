// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import reactStringReplace from 'react-string-replace';

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

// redux actions
import {
  toggleResumeSections,
} from '../redux/actions';

class Resume extends Component {
  /**
   * Informs redux of the site toggle
   */
  static updateSectionToggle(updateSection, sectionsOpen) {
    updateSection(sectionsOpen);
  }

  /**
   * Constructor.
   */
  constructor(props) {
    super(props);
    console.log('resume constructor');

    const defaultOpen = false;

    // check if we've already set sections open/closed in redux
    let { sectionsOpen } = props;
    const toggleSections = props.toggleResumeSections;
    if (sectionsOpen === null) {
      sectionsOpen = this.getOpenSections(defaultOpen);
      Resume.updateSectionToggle(toggleSections, sectionsOpen);
    }

    this.state = {
      sectionsOpen,
      searchText: '',
    };

    this.searchBarRef = React.createRef();
    this.expandCollapseAll = this.expandCollapseAll.bind(this);
    this.onTriggerClick = this.onTriggerClick.bind(this);
    this.searchBoxChanged = this.searchBoxChanged.bind(this);
    this.searchBoxKeyDown = this.searchBoxKeyDown.bind(this);
  }

  /**
   * User has clicked a trigger
   */
  onTriggerClick(section, isOpen) {
    let { sectionsOpen } = this.state;

    sectionsOpen = {
      ...sectionsOpen,
      [`${section.name}Open`]: isOpen,
    };

    this.setState({
      sectionsOpen,
    }, () => {
      Resume.updateSectionToggle(this.props.toggleResumeSections, sectionsOpen);
    });
  }

  /**
   * Returns an object representing every resume section and thier open/closed status
   */
  getOpenSections = (isOpen) => ({
    achievementsOpen: isOpen,
    educationOpen: isOpen,
    experienceOpen: isOpen,
    hobbiesOpen: isOpen,
    linksOpen: isOpen,
    managementOpen: isOpen,
    summaryOpen: isOpen,
    technicalOpen: isOpen,
  });

  /**
   * Highlites specified text.
   */
  getHighlightedText = (text) => {
    const searchText = this.state.searchText.split(',');
    let highlightedText = text;

    searchText.forEach((searchTerm) => {
      highlightedText = reactStringReplace(
        highlightedText,
        searchTerm,
        (match) => (
          <span key={uuidv4()} style={{ background: 'red' }}>
            {match}
          </span>
        ),
      );
    });

    return highlightedText;
  }

  /**
   * Create the provided page component.
   */
  createPageComponent = (sectionType, trigger) => {
    const sectionOpen = this.state.sectionsOpen[`${sectionType.name}Open`];
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
        // TODO: this is ugly, get rid of it when I'm in here next
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
   * Expands/collapses all sections.
   */
  expandCollapseAll(isOpen) {
    const sectionsOpen = this.getOpenSections(isOpen);

    this.setState({
      sectionsOpen,
    }, () => {
      Resume.updateSectionToggle(this.props.toggleResumeSections, sectionsOpen);
    });
  }

  searchBoxKeyDown(event) {
    // console.log(event.keyCode);
    // we really only care about the tab, enter, comma or space keys
    if (event.keyCode !== 9
      && event.keyCode !== 13
      && event.keyCode !== 188
      && event.keyCode !== 32
    ) return;

    let { searchText } = this.state;
    const lastIndex = searchText.lastIndexOf(',');
    let searchTerm = searchText.substring(lastIndex + 1, searchText.length);
    searchTerm = searchTerm.trim();

    // user has pressed the tab/enter/comma key so we need to complete the current search term
    if (event.keyCode === 9 || event.keyCode === 13 || event.keyCode === 188) {
      event.preventDefault();

      // user hasn't entered any text yet
      if (searchTerm === '') return;

      // add the comma we're using as a delimeter
      searchText = `${searchText.trim()},`;
      this.setState({
        searchText,
      });
      return;
    }

    // user has pressed the space key
    if (searchTerm.length < 1) {
      event.preventDefault();
    }
  }

  /**
   * User has changed the value of the search box.
   */
  searchBoxChanged(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  /**
   * Render.
   */
  render() {
    console.log('resume render');
    // eslint-disable-next-line
    const RESUME_SECTIONS = {
      ACHIEVEMENTS: {
        name: 'achievements',
        component: <Achievements getHighlightedText={this.getHighlightedText} />,
      },
      EDUCATION: {
        name: 'education',
        component: <Education getHighlightedText={this.getHighlightedText} />,
      },
      EXPERIENCE: {
        name: 'experience',
        component: <Experience getHighlightedText={this.getHighlightedText} />,
      },
      HOBBIES: {
        name: 'hobbies',
        component: <Hobbies getHighlightedText={this.getHighlightedText} />,
      },
      LINKS: {
        name: 'links',
        component: <Links getHighlightedText={this.getHighlightedText} />,
      },
      MANAGEMENT: {
        name: 'management',
        component: <ManagementSkills getHighlightedText={this.getHighlightedText} />,
      },
      SUMMARY: {
        name: 'summary',
        component: <Summary getHighlightedText={this.getHighlightedText} />,
      },
      TECHNICAL: {
        name: 'technical',
        component: <TechnicalSkills getHighlightedText={this.getHighlightedText} />,
      },
    };

    const { searchText } = this.state;

    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.pageOptions}>
            <Button
              text="Expand All"
              onClick={() => this.expandCollapseAll(true)}
              className={styles.pageOption}
            />
            <Button
              text="Collapse All"
              onClick={() => this.expandCollapseAll(false)}
              className={styles.pageOption}
            />
            {/* TODO: This will eventually need to be put into a
            proper API call when I have a server setup */ }
            <Link to={resumePdf} target="_blank" download>
              <Button
                type="button"
                text="Download PDF"
              />
            </Link>
          </div>
          <div className={styles.searchBar}>
            <span className={styles.searchBar}>Search Resume:</span>
            <input
              type="text"
              ref={this.searchBarRef}
              className={styles.searchBox}
              placeholder="Search resume (use tab/enter to complete term)"
              value={searchText}
              onChange={this.searchBoxChanged}
              onKeyDown={this.searchBoxKeyDown}
            />
          </div>
          {/*
          {this.createPageComponent(RESUME_SECTIONS.SUMMARY, 'Career Summary')}
          {this.createPageComponent(RESUME_SECTIONS.TECHNICAL, 'Technical Skills')}
          {this.createPageComponent(RESUME_SECTIONS.MANAGEMENT, 'Management Skills')}
          {this.createPageComponent(RESUME_SECTIONS.ACHIEVEMENTS, 'Professional Achievements')}
          {this.createPageComponent(RESUME_SECTIONS.EXPERIENCE, 'Professional Experience')}
          {this.createPageComponent(RESUME_SECTIONS.LINKS, 'Links')}
          {this.createPageComponent(RESUME_SECTIONS.EDUCATION, 'Education')}
          {this.createPageComponent(RESUME_SECTIONS.HOBBIES, 'Hobbies')}
          */}
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => (
  {
    sectionsOpen: state.updateClientSettings.resumeSections,
  }
);

export default connect(
  mapStateToProps,
  { toggleResumeSections },
)(Resume);

Resume.defaultProps = {
  sectionsOpen: null,
};

Resume.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  sectionsOpen: PropTypes.object,
  toggleResumeSections: PropTypes.func.isRequired,
};
