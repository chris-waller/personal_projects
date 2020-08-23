// npm imports
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// custom components
import Collapsible from 'react-collapsible';

/* eslint-disable max-len, react/no-unused-state */
const Achievements = ({
  sectionClassName, triggerClassName, openClassName, contentClassName,
}) => (
  <Collapsible
    trigger="Achievements"
    className={sectionClassName}
    openedClassName={sectionClassName}
    triggerClassName={triggerClassName}
    triggerOpenedClassName={classNames(triggerClassName, openClassName)}
    contentInnerClassName={contentClassName}
    open
  >
    <p>Achievements here</p>
  </Collapsible>

);

export default Achievements;

Achievements.propTypes = {
  sectionClassName: PropTypes.string.isRequired,
  triggerClassName: PropTypes.string.isRequired,
  openClassName: PropTypes.string.isRequired,
  contentClassName: PropTypes.string.isRequired,
};
