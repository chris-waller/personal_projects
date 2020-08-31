// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// style imports
import styles from './styles/achievements.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class Achievements extends Component {
  render() {
    const nbsp = '\xa0';
    const pageText = {
      heading1: `January, 2019 ${nbsp}${nbsp}[Aeryon Labs / FLIR]`,
      content1: `Was instrumental in the initial stakeholder meetings, design, development and
       deployment of a highly successful ReactJs/Java8 video application used by emergency
        responders to monitor critical situations in real-time. This software played a
        key role in FLIR's public acquisition of Aeryon Labs.`,
      heading2: `November, 2015 ${nbsp}${nbsp} [Brock Solutions]`,
      content2: `Tech lead and commissioner for a brand new baggage handling system for the
       Myrtle Beach International Airport, in cooperation with the United States TSA.
       Project completed, installed and passed every key deliverable milestone on-time
       and well under-budget.`,
      heading3: `June, 2014 ${nbsp}${nbsp} [Brock Solutions]`,
      content3: `Reverse-engineered a broken and undocumented baggage handling system
       from a major United States airport. Able to recover the missing airport data
       while creating some patches to keep the system running. This led to a proposal
       for a major software and hardware upgrade.`,
      heading4: `January, 2012 ${nbsp}${nbsp} [Brock Solutions]`,
      content4: `One of two team members responsible for commissioning, setting up
       acceptance-testing and attending go-live of a brand new United States Postal
       Service (USPS) mail sortation system for O'Hare International Airport. Project
       delivered ahead of schedule and helped secure a financial incentive for one of
       the project's partners.`,
    };
    Object.keys(pageText).forEach((key) => {
      const highligtedText = this.props.getHighlightedText(pageText[key]);
      pageText[key] = highligtedText;
    });
    return (
      <div className={styles.container}>
        <div className={styles.heading}>{pageText.heading1}</div>
        <div className={styles.content}>{pageText.content1}</div>
        <div className={styles.heading}>{pageText.heading2}</div>
        <div className={styles.content}>{pageText.content2}</div>
        <div className={styles.heading}>{pageText.heading3}</div>
        <div className={styles.content}>{pageText.content3}</div>
        <div className={styles.heading}>{pageText.heading4}</div>
        <div className={styles.content}>{pageText.content4}</div>
      </div>
    );
  }
}

Achievements.propTypes = {
  getHighlightedText: PropTypes.func.isRequired,
};
