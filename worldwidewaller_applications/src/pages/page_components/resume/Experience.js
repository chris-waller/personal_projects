// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { cloneDeep } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
/* eslint-disable */
// custom components
import Collapsible from '~/components/Collapsible';
import { getHighlightedText } from './ResumeHelpers';

// style imports
import styles from './styles/experience.scss';

// import section text
import {
  job1 as Job1, job2 as Job2, job3 as Job3, job4 as Job4, job5 as Job5,
} from './ExperienceSections';

// eslint-disable-next-line react/prefer-stateless-function
class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job1Highlighted: null,
      job2Highlighted: null,
      job3Highlighted: null,
      job4Highlighted: null,
      job5Highlighted: null,
      isOpen: props.isOpen,
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { searchText } = props;
    let anyJobsUpdated = false;
    let highlightedText = '';
    let results = null;
    let wasTextUpdated = false;

    // Job 1
    let job1Highlighted = cloneDeep(Job1);
    results = getHighlightedText(searchText, job1Highlighted);
    highlightedText = results.highlightedText;
    wasTextUpdated = results.wasTextUpdated;
    job1Highlighted = highlightedText;
    anyJobsUpdated = anyJobsUpdated || results.wasTextUpdated;

    // Job 2
    let job2Highlighted = cloneDeep(Job2);
    results = getHighlightedText(searchText, job2Highlighted);
    highlightedText = results.highlightedText;
    wasTextUpdated = results.wasTextUpdated
    job2Highlighted = highlightedText;
    anyJobsUpdated = anyJobsUpdated || results.wasTextUpdated;

    // Job 3
    let job3Highlighted = cloneDeep(Job3);
    results = getHighlightedText(searchText, job3Highlighted);
    highlightedText = results.highlightedText;
    wasTextUpdated = results.wasTextUpdated
    job3Highlighted = highlightedText;
    anyJobsUpdated = anyJobsUpdated || results.wasTextUpdated;

    // Job 4
    let job4Highlighted = cloneDeep(Job4);
    results = getHighlightedText(searchText, job4Highlighted);
    highlightedText = results.highlightedText;
    wasTextUpdated = results.wasTextUpdated
    job4Highlighted = highlightedText;
    anyJobsUpdated = anyJobsUpdated || results.wasTextUpdated;

    // Job 5
    let job5Highlighted = cloneDeep(Job5);
    results = getHighlightedText(searchText, job5Highlighted);
    highlightedText = results.highlightedText;
    wasTextUpdated = results.wasTextUpdated
    job5Highlighted = highlightedText;
    anyJobsUpdated = anyJobsUpdated || results.wasTextUpdated;

    return {
      job1Highlighted,
      job2Highlighted,
      job3Highlighted,
      job4Highlighted,
      job5Highlighted,
      anyJobsUpdated,
    };
  }

  render() {
    const {
      job1Highlighted,
      job2Highlighted,
      job3Highlighted,
      job4Highlighted,
      job5Highlighted,
      isOpen,
    } = this.state;
    const { sectionName, handleTriggerClick } = this.props;

    return (
      <Collapsible
        key="Experience Section"
        trigger="Professional Experience"
        isOpen={isOpen}
        sectionName={sectionName}
        handleTriggerClick={handleTriggerClick}
      >
        <div className={styles.container}>
          <div className={styles.header}>{job1Highlighted.title}</div>
          <ul>
            <li>{job1Highlighted.li1}</li>
            <li>
              {job1Highlighted.li2A}
              <a target="__blank" href="https://github.com/chris-waller/personal_projects">
                {job1Highlighted.li2B}
              </a>
              {job1Highlighted.li2C}
            </li>
          </ul>

          <JobSection job={job2Highlighted} />
          <JobSection job={job3Highlighted} />
          <JobSection job={job4Highlighted} />
          <JobSection job={job5Highlighted} />

        </div>
      </Collapsible>
    );
  }
}

export default Experience;

Experience.propTypes = {
  searchText: PropTypes.string,
  sectionName: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleTriggerClick: PropTypes.func.isRequired,
};

Experience.defaultProps = {
  searchText: '',
};

// eslint-disable-next-line react/prefer-stateless-function
class JobSection extends Component {
  render() {
    const { job } = this.props;
    const { subJobs } = job;
    return (
      <>
        <div className={styles.header}>
          {job.title}
        </div>
        {
          // eslint-disable-next-line arrow-body-style
          subJobs.map((subJob) => {
            return (
              <div className={styles.subSection} key={uuidv4()}>
                <p className={styles.subHeader}>{subJob.title}</p>
                <p className={styles.skills}>{subJob.skills}</p>
                <div>{subJob.summary}</div>
                {(subJob.examples !== undefined) && (
                <ul>
                  {
                    // eslint-disable-next-line arrow-body-style
                    subJob.examples.map((example) => {
                      return (
                        <React.Fragment key={uuidv4()}>
                          <li key={uuidv4()}>{example.description}</li>
                          {(example.subDescriptions !== undefined) && (
                          <ul>
                            {
                              // eslint-disable-next-line arrow-body-style
                              example.subDescriptions.map((subDescription) => {
                                return (
                                  <li key={uuidv4()}>{subDescription.text}</li>
                                );
                              })
                            }
                          </ul>
                          )}
                        </React.Fragment>
                      );
                    })
                  }
                </ul>
                )}
              </div>
            );
          })
        }
      </>
    );
  }
}
JobSection.propTypes = {
  // eslint-disable-next-line
  job: PropTypes.object.isRequired,
};
