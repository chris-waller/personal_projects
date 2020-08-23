// npm imports
import React from 'react';
import ReactCollapsible from 'react-collapsible';
import classNames from 'classnames';

// style imports
import styles from './styles/collapsible.scss';

const Collapsible = () => (
  <ReactCollapsible
    trigger="Management Skills"
    className={styles.section}
    openedClassName={styles.section}
    triggerClassName={styles.trigger}
    triggerOpenedClassName={classNames(styles.trigger, styles.open)}
    contentInnerClassName={styles.content}
  >
    TEST
  </ReactCollapsible>
);

export default Collapsible;
