// npm imports
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// custom components
import Collapsible from 'react-collapsible';

const Hobbies = ({
  sectionClassName, triggerClassName, openClassName, contentClassName,
}) => (
  <Collapsible
    trigger="Hobbies & Interests"
    className={sectionClassName}
    openedClassName={sectionClassName}
    triggerClassName={triggerClassName}
    triggerOpenedClassName={classNames(triggerClassName, openClassName)}
    contentInnerClassName={contentClassName}
    open
  >
    <p>My hobbies</p>
  </Collapsible>
);

export default Hobbies;

Hobbies.propTypes = {
  sectionClassName: PropTypes.string.isRequired,
  triggerClassName: PropTypes.string.isRequired,
  openClassName: PropTypes.string.isRequired,
  contentClassName: PropTypes.string.isRequired,
};
