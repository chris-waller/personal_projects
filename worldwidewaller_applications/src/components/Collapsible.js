// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// custom components
import ReactCollapsible from 'react-collapsible';

/**
 * Generic component to wrap some HTML in a collapsible react component.
 */
class Collapsible extends Component {
  /**
   * Constructor.
   */
  constructor(props) {
    super(props);

    this.onTriggerClick = this.onTriggerClick.bind(this);
  }

  /**
   * User has clicked the trigger
   */
  onTriggerClick() {
    const { isOpen } = this.props;
    const { handleTriggerClick, resumeSection } = this.props;
    handleTriggerClick(resumeSection, !isOpen);
  }

  /**
   * Render.
   */
  render() {
    const {
      trigger, sectionClassName, triggerClassName, openClassName,
      contentClassName, isOpen, children,
    } = this.props;
    return (
      <ReactCollapsible
        trigger={trigger}
        handleTriggerClick={this.onTriggerClick}
        className={sectionClassName}
        openedClassName={sectionClassName}
        triggerClassName={triggerClassName}
        triggerOpenedClassName={classNames(triggerClassName, openClassName)}
        contentInnerClassName={contentClassName}
        open={isOpen}
      >
        {children}
      </ReactCollapsible>
    );
  }
}

export default Collapsible;

Collapsible.propTypes = {
  trigger: PropTypes.string.isRequired,
  resumeSection: PropTypes.string.isRequired,
  sectionClassName: PropTypes.string.isRequired,
  triggerClassName: PropTypes.string.isRequired,
  openClassName: PropTypes.string.isRequired,
  contentClassName: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleTriggerClick: PropTypes.func.isRequired,
};
