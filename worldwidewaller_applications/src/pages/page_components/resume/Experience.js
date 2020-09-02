// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { cloneDeep } from 'lodash';

// custom components
import { getHighlightedText } from './ResumeHelpers';

// style imports
import styles from './styles/experience.scss';

// import section text
import {
  job1 as Job1, job2 as Job2, job3 as Job3, job4 as Job4, job5 as Job5,
} from './ExperienceSections';

// eslint-disable-next-line react/prefer-stateless-function
class Experience extends Component {
  static foo() {

  }

  constructor() {
    super();
    this.state = {
      job1Highlighted: null,
      job2Highlighted: null,
      job3Highlighted: null,
      job4Highlighted: null,
      job5Highlighted: null,
    };
  }

  static getDerivedStateFromProps(nextProps) {
    const { searchText } = nextProps;

    const job1Highlighted = cloneDeep(Job1);
    const job2Highlighted = cloneDeep(Job2);
    const job3Highlighted = cloneDeep(Job3);
    const job4Highlighted = cloneDeep(Job4);
    const job5Highlighted = cloneDeep(Job5);

    Object.keys(job1Highlighted).forEach((key) => {
      const highligtedText = getHighlightedText(searchText, job1Highlighted[key]);
      job1Highlighted[key] = highligtedText;
    });

    Object.keys(job2Highlighted).forEach((key) => {
      const highligtedText = getHighlightedText(searchText, job2Highlighted[key]);
      job2Highlighted[key] = highligtedText;
    });

    Object.keys(job3Highlighted).forEach((key) => {
      const highligtedText = getHighlightedText(searchText, job3Highlighted[key]);
      job3Highlighted[key] = highligtedText;
    });

    Object.keys(job4Highlighted).forEach((key) => {
      const highligtedText = getHighlightedText(searchText, job4Highlighted[key]);
      job4Highlighted[key] = highligtedText;
    });

    Object.keys(job5Highlighted).forEach((key) => {
      const highligtedText = getHighlightedText(searchText, job5Highlighted[key]);
      job5Highlighted[key] = highligtedText;
    });

    return {
      job1Highlighted,
      job2Highlighted,
      job3Highlighted,
      job4Highlighted,
      job5Highlighted,
    };
  }

  render() {
    const {
      job1Highlighted,
      job2Highlighted,
      job3Highlighted,
      job4Highlighted,
      job5Highlighted,
    } = this.state;

    return (
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
    );
  }
}

export default Experience;

Experience.propTypes = {
  searchText: PropTypes.string,
};

Experience.defaultProps = {
  searchText: '',
};

// eslint-disable-next-line react/prefer-stateless-function
class JobSection extends Component {
  render() {
    const { job } = this.props;
    // eslint-disable-next-line
    const subJobs = job.subJobs;
    return (
      <>
        <div className={styles.header}>
          {job.title}
        </div>
        {
          // eslint-disable-next-line arrow-body-style
          job.subJobs.map((subJob) => {
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
