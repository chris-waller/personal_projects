// npm imports
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// custom components
import Collapsible from 'react-collapsible';

// style imports
import styles from './styles/links.scss';

const Links = ({
  sectionClassName, triggerClassName, openClassName, contentClassName, isOpen,
}) => (
  <Collapsible
    trigger="Professional Links"
    className={sectionClassName}
    openedClassName={sectionClassName}
    triggerClassName={triggerClassName}
    triggerOpenedClassName={classNames(triggerClassName, openClassName)}
    contentInnerClassName={contentClassName}
    open={isOpen}
  >
    <div className={styles.links}>
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

export default Links;

Links.propTypes = {
  sectionClassName: PropTypes.string.isRequired,
  triggerClassName: PropTypes.string.isRequired,
  openClassName: PropTypes.string.isRequired,
  contentClassName: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
