// npm imports
import React from 'react';
import classNames from 'classnames';

// custom components
import Collapsible from 'react-collapsible';

// style imports
import styles from './styles/resume_components.scss';

/* eslint-disable max-len, react/no-unused-state */
const Achievements = () => (
  <Collapsible
    trigger="Achievements"
    className={styles.section}
    openedClassName={styles.section}
    triggerClassName={styles.trigger}
    triggerOpenedClassName={classNames(styles.trigger, styles.open)}
    contentInnerClassName={styles.content}
  >
    <p>Achievements here</p>
  </Collapsible>

);

export default Achievements;
