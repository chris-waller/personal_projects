// npm imports
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// custom components
import Collapsible from 'react-collapsible';

const ManagementSkills = ({
  sectionClassName, triggerClassName, openClassName, contentClassName,
}) => (
  <Collapsible
    trigger="Management Skills"
    className={sectionClassName}
    openedClassName={sectionClassName}
    triggerClassName={triggerClassName}
    triggerOpenedClassName={classNames(triggerClassName, openClassName)}
    contentInnerClassName={contentClassName}
  >
    <p>My management skills</p>
  </Collapsible>

);

export default ManagementSkills;

ManagementSkills.propTypes = {
  sectionClassName: PropTypes.string.isRequired,
  triggerClassName: PropTypes.string.isRequired,
  openClassName: PropTypes.string.isRequired,
  contentClassName: PropTypes.string.isRequired,
};
