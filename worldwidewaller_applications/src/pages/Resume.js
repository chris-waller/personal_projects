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
import SearchTerm from '~/components/SearchTerm';
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

  static getSearchbarText(searchText) {
    console.log(searchText);
    const searchbarText = searchText;

    return searchbarText;
  }

  static getSearchTerms(searchString) {
    // we only care about completed search terms
    const lastCommaIndex = searchString.lastIndexOf(',');
    if (lastCommaIndex === -1 || searchString.length === 0) {
      return {};
    }
    // const newSearchString = searchString.substring(0, lastCommaIndex);
    if (searchString.indexOf(',') === -1) {
      return searchString;
    }
    const foo = searchString.split(',');
    return foo;
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

    this.state = {
      searchString: props.searchString,
      searchTerms: {},
      pageText: {
        summary: {
          pageText: Summary.pageText,
          updated: false,
        },
        achievements: {
          pageText: Achievements.pageText,
          updated: false,
        },
        management: {
          pageText: ManagementSkills.pageText,
          updated: false,
        },
        technical: {
          pageText: TechnicalSkills.pageText,
          updated: false,
        },
        experience: {
          pageText: Experience.pageText,
          updated: false,
        },
      },
    };

    this.searchBarRef = React.createRef();
    this.expandCollapseAll = this.expandCollapseAll.bind(this);
    this.onTriggerClick = this.onTriggerClick.bind(this);
    this.searchBoxChanged = this.searchBoxChanged.bind(this);
    this.searchBoxKeyDown = this.searchBoxKeyDown.bind(this);
    this.deleteSearchTerm = this.deleteSearchTerm.bind(this);
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    return {
      pageText: Resume.getResumeSections(nextState.searchString),
      sectionsOpen: nextProps.sectionsOpen,
      searchString: nextState.searchString,
      searchTerms: Resume.getSearchTerms(nextState.searchString),
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

  searchBoxKeyDown(event) {
    // we really only care about the tab, enter, comma or space keys
    if (event.keyCode !== 9
      && event.keyCode !== 13
      && event.keyCode !== 188
      && event.keyCode !== 32
    ) return;

    let searchText = this.state.searchString;
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
      this.props.setResumeSearchString(searchText);

      const pageText = Resume.getResumeSections(searchText);
      let { sectionsOpen } = this.state;

      Object.keys(pageText).forEach((key) => {
        const wasHighlighted = pageText[key].updated;
        if (wasHighlighted) {
          sectionsOpen = {
            ...sectionsOpen,
            [`${key}Open`]: true,
          };
          Resume.updateSectionToggle(this.props.toggleResumeSections, sectionsOpen);
        }
      });

      const searchTerms = Resume.getSearchTerms(searchText);

      this.setState({
        sectionsOpen,
        searchString: searchText,
        searchTerms,
        pageText,
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
    const searchString = event.target.value;
    const pageText = Resume.getResumeSections(searchString);
    this.setState({
      searchString,
      // searchTerms: Resume.getSearchTerms(searchString),
      pageText,
    });
  }

  deleteSearchTerm(term) {
    const { searchTerms } = this.state;
    const index = searchTerms.indexOf(term);
    if (index > -1) {
      searchTerms.splice(index, 1);
    }
    this.setState({
      searchTerms,
      searchString: `${searchTerms.join(',')}`,
    });
  }

  /**
   * Render.
   */
  render() {
    const { searchString, searchTerms } = this.state;
    const searchBarText = Resume.getSearchbarText(searchString);
    console.log('Render Search Terrms', searchTerms);
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
            {
              Object.keys(searchTerms).length > 0 && searchTerms.map((term) => {
                if (term !== '') {
                  return (
                    <SearchTerm
                      key={`term-${term}`}
                      name={term}
                      termClicked={() => this.deleteSearchTerm(term)}
                    />
                  );
                }
                return null;
              })
            }

            <input
              type="text"
              ref={this.searchBarRef}
              className={styles.searchBox}
              placeholder="Search resume (use tab/enter to complete term)"
              value={searchBarText}
              onChange={this.searchBoxChanged}
              onKeyDown={this.searchBoxKeyDown}
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
