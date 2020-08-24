// npm imports
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// custom components
import Collapsible from 'react-collapsible';

const Experience = ({
  sectionClassName, triggerClassName, openClassName, contentClassName, isOpen,
}) => (
  <Collapsible
    trigger="Professional Experience"
    className={sectionClassName}
    openedClassName={sectionClassName}
    triggerClassName={triggerClassName}
    triggerOpenedClassName={classNames(triggerClassName, openClassName)}
    contentInnerClassName={contentClassName}
    open={isOpen}
  >
    <p>My work experience</p>
  </Collapsible>

);

export default Experience;

Experience.propTypes = {
  sectionClassName: PropTypes.string.isRequired,
  triggerClassName: PropTypes.string.isRequired,
  openClassName: PropTypes.string.isRequired,
  contentClassName: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
