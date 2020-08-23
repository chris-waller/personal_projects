// npm imports
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// custom components
import Collapsible from 'react-collapsible';

const Experience = ({
  sectionClassName, triggerClassName, openClassName, contentClassName,
}) => (
  <Collapsible
    trigger="Professional Experience"
    className={sectionClassName}
    openedClassName={sectionClassName}
    triggerClassName={triggerClassName}
    triggerOpenedClassName={classNames(triggerClassName, openClassName)}
    contentInnerClassName={contentClassName}
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
};
