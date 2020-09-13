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
        <div className={styles.experienceContainer}>
          <p className={styles.experienceHeader}>
            {job1.title}
            <span>{`(${job1.date})`}</span>
          </p>
          <ul>
            <li>{job1.li1}</li>
            <li>
              {job1.li2A}
              <a target="__blank" href="https://resume.worldwidewaller.ca">
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
        <p className={styles.experienceHeader}>
          {job.title}
          <span>{`(${job.date})`}</span>
        </p>
        {
          subJobs.map((subJob) => {
            return (
              <div className={styles.experienceSubSection} key={uuidv4()}>
                <p className={styles.experienceSubHeader}>{subJob.title}</p>
                <p className={styles.experienceSkills}>
                  <span>Skills/Tools/Libraries Used:</span>
                  <span>{subJob.skills}</span>
                </p>
                <p className={styles.summarySkills}>
                  <span>Job Summary:</span>
                  <span>{subJob.summary}</span>
                </p>
                {(subJob.examples !== undefined) && (
                <ul>
                  {
                    subJob.examples.map((example) => {
                      return (
                        <React.Fragment key={uuidv4()}>
                          <li key={uuidv4()}>{example.description}</li>
                          {(example.subDescriptions !== undefined) && (
                          <ul>
                            {
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
