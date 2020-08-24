// npm imports
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// custom components
import Collapsible from 'react-collapsible';

// style imports
import styles from './styles/education.scss';

const Education = ({
  sectionClassName, triggerClassName, openClassName, contentClassName, isOpen,
}) => (
  <Collapsible
    trigger="Education"
    className={sectionClassName}
    openedClassName={sectionClassName}
    triggerClassName={triggerClassName}
    triggerOpenedClassName={classNames(triggerClassName, openClassName)}
    contentInnerClassName={contentClassName}
    open={isOpen}
  >
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <a
            target="__blank"
            href="https://academics.sheridancollege.ca/programs/computer-systems-technology-software-development-and-network-engineering"
          >
            Software Development and Network Engineering Advanced Diploma,
            <span className={styles.honours}>
              &nbsp;with Honours
            </span>
          </a>
        </div>
        <div>
          <a target="__blank" href="https://www.sheridancollege.ca/">
            Sheridan Institute of Technology and Advanced Learning, 2010
          </a>
        </div>
      </div>
    </div>
  </Collapsible>

);

export default Education;

Education.propTypes = {
  sectionClassName: PropTypes.string.isRequired,
  triggerClassName: PropTypes.string.isRequired,
  openClassName: PropTypes.string.isRequired,
  contentClassName: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
