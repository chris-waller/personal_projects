// npm imports
import React from 'react';
import PropTypes from 'prop-types';

// custom components
import Collapsible from '~/components/Collapsible';

// style imports
import styles from './styles/education.scss';

const Education = (props) => {
  const { sectionName, isOpen, handleTriggerClick } = props;
  return (
    <Collapsible
      key="Educations Section"
      trigger="Education"
      isOpen={isOpen}
      sectionName={sectionName}
      handleTriggerClick={handleTriggerClick}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
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
};

export default Education;

Education.propTypes = {
  sectionName: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleTriggerClick: PropTypes.func.isRequired,
};
