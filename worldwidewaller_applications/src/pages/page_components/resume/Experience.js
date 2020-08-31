// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { cloneDeep } from 'lodash';

// style imports
import styles from './styles/experience.scss';

// import section text
import {
  job1 as Job1, job2 as Job2, job3 as Job3, job4 as Job4, job5 as Job5,
} from './ExperienceSections';

// eslint-disable-next-line react/prefer-stateless-function
export default class Experience extends Component {
  /**
   * Get highlighted text.
   * This is a recursive function that will iterate through all child
   * nodes and wrap all found text in a highlight style.
   */
  getHighlightedText = (node) => {
    const nodeType = typeof (node);
    const highlightedNode = node;
    if (nodeType === 'string') {
      return this.props.getHighlightedText(node);
    }

    Object.keys(node).forEach((key) => {
      const entry = node[key];
      const highligtedText = this.getHighlightedText(entry);
      highlightedNode[key] = highligtedText;
    });

    return highlightedNode;
  }

  render() {
    let job1Highlighted = cloneDeep(Job1);
    job1Highlighted = this.getHighlightedText(job1Highlighted);
    let job2Highlighted = cloneDeep(Job2);
    job2Highlighted = this.getHighlightedText(job2Highlighted);
    let job3Highlighted = cloneDeep(Job3);
    job3Highlighted = this.getHighlightedText(job3Highlighted);
    let job4Highlighted = cloneDeep(Job4);
    job4Highlighted = this.getHighlightedText(job4Highlighted);
    let job5Highlighted = cloneDeep(Job5);
    job5Highlighted = this.getHighlightedText(job5Highlighted);

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

Experience.propTypes = {
  getHighlightedText: PropTypes.func.isRequired,
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
