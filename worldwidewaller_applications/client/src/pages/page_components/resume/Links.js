// npm imports
import React from 'react';
import PropTypes from 'prop-types';

// custom components
import Collapsible from '~/components/Collapsible';

// style imports
import styles from './styles/links.scss';

const Links = (props) => {
  const { sectionName, isOpen, handleTriggerClick } = props;
  return (
    <Collapsible
      key="Links Section"
      trigger="Links"
      isOpen={isOpen}
      sectionName={sectionName}
      handleTriggerClick={handleTriggerClick}
    >
      <div className={styles.container}>
        <a target="_blank" rel="noopener noreferrer" href="http://resume.worldwidewaller.ca">
          Online Resume
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=Yv-xtL_wfiU">
          AeryonLive beta promo video 1
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=YGcwxezf0Yw">
          AeryonLive beta promo video 2
        </a>
        <a target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/chris-waller-54881a29">
          LinkedIn
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/chris-waller/personal_projects">
          GitHub
        </a>
      </div>
    </Collapsible>
  );
};

export default Links;

Links.propTypes = {
  sectionName: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleTriggerClick: PropTypes.func.isRequired,
};
