// npm imports
import React from 'react';

// style imports
import styles from './styles/achievements.scss';

/* eslint-disable max-len, react/no-unused-state */
const Achievements = () => (
  <div className={styles.container}>
    <div className={styles.heading}>January, 2019 &nbsp; [Aeryon Labs / FLIR]</div>
    <div className={styles.content}>
      Was instrumental in the initial stakeholder meetings, design, development and deployment of a highly successful
      ReactJs/Java8 video application used by emergency responders to monitor critical situations in real-time. This
      software played a key role in FLIR&apos;s public acquisition of Aeryon Labs.
    </div>
    <div className={styles.heading}>November, 2015 &nbsp; [Brock Solutions]</div>
    <div className={styles.content}>
      Tech lead and commissioner for a brand new baggage handling system for the Myrtle Beach International Airport,
      in cooperation with the United States TSA. Project completed, installed and passed every key deliverable milestone
      on-time and well under-budget.
    </div>
    <div className={styles.heading}>June, 2014 &nbsp; [Brock Solutions]</div>
    <div className={styles.content}>
      Reverse-engineered a broken and undocumented baggage handling system from a major United States airport.
      Able to recover the missing airport data while creating some patches to keep the system running. This led to a
      proposal for a major software and hardware upgrade.
    </div>
    <div className={styles.heading}>January, 2012 &nbsp; [Brock Solutions]</div>
    <div className={styles.content}>
      One of two team members responsible for commissioning, setting up acceptance-testing and attending go-live of a
      brand new United States Postal Service (USPS) mail sortation system for O&apos;Hare International Airport. Project
      delivered ahead of schedule and helped secure a financial incentive for one of the project&apos;s partners.
    </div>
  </div>
);

export default Achievements;
