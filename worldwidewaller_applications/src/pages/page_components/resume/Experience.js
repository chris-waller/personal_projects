// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

// custom components
import Collapsible from '~/components/Collapsible';

// style imports
import styles from './styles/experience.scss';

// import section text
import {
  job1 as Job1, job2 as Job2, job3 as Job3, job4 as Job4, job5 as Job5,
} from './ExperienceSections';

class Experience extends Component {
  static pageText = {
    job1: Job1,
    job2: Job2,
    job3: Job3,
    job4: Job4,
    job5: Job5,
  };

  render() {
    const highlightedText = this.props.pageText;
    const {
      job1,
      job2,
      job3,
      job4,
      job5,
    } = highlightedText;
    const { isOpen, sectionName, handleTriggerClick } = this.props;

    return (
      <Collapsible
        key="Experience Section"
        trigger="Professional Experience"
        isOpen={isOpen}
        sectionName={sectionName}
        handleTriggerClick={handleTriggerClick}
      >
        <div className={styles.container}>
          <div className={styles.header}>{job1.title}</div>
          <ul>
            <li>{job1.li1}</li>
            <li>
              {job1.li2A}
              <a target="__blank" href="https://github.com/chris-waller/personal_projects">
                {job1.li2B}
              </a>
              {job1.li2C}
            </li>
          </ul>

          <JobSection job={job2} />
          <JobSection job={job3} />
          <JobSection job={job4} />
          <JobSection job={job5} />

        </div>
      </Collapsible>
    );
  }
}

export default Experience;

Experience.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pageText: PropTypes.object.isRequired,
  sectionName: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleTriggerClick: PropTypes.func.isRequired,
};

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
  // eslint-disable-next-line react/forbid-prop-types
  job: PropTypes.object.isRequired,
};
