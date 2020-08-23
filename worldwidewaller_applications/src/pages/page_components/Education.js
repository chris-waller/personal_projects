// npm imports
import React from 'react';
import classNames from 'classnames';

// custom components
import Collapsible from 'react-collapsible';

// style imports
import styles from './styles/resume_components.scss';

const Education = () => (
  <Collapsible
    trigger="Education"
    className={styles.section}
    openedClassName={styles.section}
    triggerClassName={styles.trigger}
    triggerOpenedClassName={classNames(styles.trigger, styles.open)}
    contentInnerClassName={styles.content}
  >
    <p>My Education</p>
  </Collapsible>

);

export default Education;
