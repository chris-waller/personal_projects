// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import isEqual from 'react-fast-compare';
import { Log, traceLifecycle } from 'react-lifecycle-visualizer';
import { cloneDeep } from 'lodash';

// style imports
import styles from './styles/resume.scss';

// custom components
import Layout from '~/components/Layout';
import Summary from './page_components/resume/Summary';
import Achievements from './page_components/resume/Achievments';
import ManagementSkills from './page_components/resume/ManagementSkills';
import TechnicalSkills from './page_components/resume/TechnicalSkills';
import Experience from './page_components/resume/Experience';
import Hobbies from './page_components/resume/Hobbies';
import Links from './page_components/resume/Links';
import Education from './page_components/resume/Education';
import Button from '~/components/Button';
import SearchBar from '~/components/SearchBar';
import { getHighlightedText } from './page_components/resume/ResumeHelpers';

// resource imports
import resumePdf from '~/resources/resume.pdf';

// redux actions
import {
  toggleResumeSections,
  setResumeSearchString,
} from '~/redux/actions';

class Resume extends Component {
  /**
   * Informs redux of the site toggle
   */
  static updateSectionToggle(updateSection, sectionsOpen) {
    updateSection(sectionsOpen);
  }

  static getResumeSections(searchText) {
    const sectionData = {
      summary: cloneDeep(Summary.pageText),
      achievements: cloneDeep(Achievements.pageText),
      management: cloneDeep(ManagementSkills.pageText),
      technical: cloneDeep(TechnicalSkills.pageText),
      experience: cloneDeep(Experience.pageText),
    };

    Object.keys(sectionData).forEach((key) => {
      const results = getHighlightedText(searchText, sectionData[key]);
      sectionData[key] = {
        pageText: results.highlightedText,
        updated: results.wasTextUpdated,
      };
    });

    return sectionData;
  }

  /**
   * Constructor
   */
  constructor(props) {
    super(props);

    const searchStringSanitized = (props.searchString === null ? '' : props.searchString);
    this.state = {
      searchString: props.searchString,
      pageText: Resume.getResumeSections(searchStringSanitized),
    };

    this.searchBarRef = React.createRef();
    this.expandCollapseAll = this.expandCollapseAll.bind(this);
    this.onTriggerClick = this.onTriggerClick.bind(this);
    this.searchFilterChanged = this.searchFilterChanged.bind(this);
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    return {
      sectionsOpen: nextProps.sectionsOpen,
      searchString: nextState.searchString,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    let shouldUpdate = true;
    if (isEqual(this.state.sectionsOpen, nextProps.sectionsOpen)
      && nextState.searchString === this.state.searchString) {
      shouldUpdate = false;
    }
    return shouldUpdate;
  }

  /**
   * User has clicked a trigger
   */
  onTriggerClick(sectionName, isOpen) {
    // check if the section is already open/closed
    let { sectionsOpen } = this.state;
    const currentStatus = sectionsOpen[`${sectionName}Open`];
    if (isOpen === currentStatus) {
      return;
    }

    sectionsOpen = {
      ...sectionsOpen,
      [`${sectionName}Open`]: isOpen,
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
   * Expands/collapses all sections.
   */
  expandCollapseAll(isOpen) {
    const sectionsOpen = this.getOpenSections(isOpen);
    Resume.updateSectionToggle(this.props.toggleResumeSections, sectionsOpen);
  }

  searchFilterChanged(newSearchString, isNewTerm) {
    const currentSearchString = this.state.searchString;
    if (currentSearchString !== newSearchString) {
      const pageText = Resume.getResumeSections(newSearchString);
      let { sectionsOpen } = this.state;
      Object.keys(pageText).forEach((key) => {
        const wasHighlighted = pageText[key].updated;
        if (wasHighlighted) {
          sectionsOpen = {
            ...sectionsOpen,
            [`${key}Open`]: true,
          };
        }
      });

      // update the redux store
      if (isNewTerm) Resume.updateSectionToggle(this.props.toggleResumeSections, sectionsOpen);
      this.props.setResumeSearchString(newSearchString);

      this.setState({
        pageText,
        sectionsOpen,
        searchString: newSearchString,
      });
    }
  }

  /**
   * Render.
   */
  render() {
    const { searchString } = this.state;
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
            <SearchBar
              searchFilterChanged={this.searchFilterChanged}
              searchString={searchString}
            />
          </div>
          <div style={{
            display: 'none', marginTop: '10px', color: 'black', backgroundColor: 'white',
          }}
          >
            <Log />
          </div>

          <Summary
            pageText={this.state.pageText.summary.pageText}
            searchText={searchString}
            sectionName="summary"
            isOpen={this.state.sectionsOpen.summaryOpen}
            handleTriggerClick={this.onTriggerClick}
          />
          <TechnicalSkills
            pageText={this.state.pageText.technical.pageText}
            searchText={searchString}
            sectionName="technical"
            isOpen={this.state.sectionsOpen.technicalOpen}
            handleTriggerClick={this.onTriggerClick}
          />
          <ManagementSkills
            pageText={this.state.pageText.management.pageText}
            searchText={searchString}
            sectionName="management"
            isOpen={this.state.sectionsOpen.managementOpen}
            handleTriggerClick={this.onTriggerClick}
          />
          <Achievements
            pageText={this.state.pageText.achievements.pageText}
            searchText={searchString}
            sectionName="achievements"
            isOpen={this.state.sectionsOpen.achievementsOpen}
            handleTriggerClick={this.onTriggerClick}
          />
          <Experience
            pageText={this.state.pageText.experience.pageText}
            searchText={searchString}
            sectionName="experience"
            isOpen={this.state.sectionsOpen.experienceOpen}
            handleTriggerClick={this.onTriggerClick}
          />
          <Links
            sectionName="links"
            isOpen={this.state.sectionsOpen.linksOpen}
            handleTriggerClick={this.onTriggerClick}
          />
          <Education
            sectionName="education"
            isOpen={this.state.sectionsOpen.educationOpen}
            handleTriggerClick={this.onTriggerClick}
          />
          <Hobbies
            sectionName="hobbies"
            isOpen={this.state.sectionsOpen.hobbiesOpen}
            handleTriggerClick={this.onTriggerClick}
          />
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => (
  {
    sectionsOpen: state.clientSettings.resumeSections,
    searchString: state.clientSettings.resumeSearchString,
  }
);

export default connect(
  mapStateToProps,
  { toggleResumeSections, setResumeSearchString },
)(traceLifecycle(Resume));

Resume.defaultProps = {
  sectionsOpen: null,
  searchString: '',
};

Resume.propTypes = {
  sectionsOpen: PropTypes.shape(
    {
      achievementsOpen: PropTypes.bool.isRequired,
      educationOpen: PropTypes.bool.isRequired,
      experienceOpen: PropTypes.bool.isRequired,
      hobbiesOpen: PropTypes.bool.isRequired,
      linksOpen: PropTypes.bool.isRequired,
      managementOpen: PropTypes.bool.isRequired,
      summaryOpen: PropTypes.bool.isRequired,
      technicalOpen: PropTypes.bool.isRequired,
    },
  ),
  toggleResumeSections: PropTypes.func.isRequired,
  searchString: PropTypes.string,
  setResumeSearchString: PropTypes.func.isRequired,
};
