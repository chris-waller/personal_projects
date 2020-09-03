// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// custom components
import ReactCollapsible from 'react-collapsible';

// sytle imports
import styles from './styles/collapsible.scss';

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
    const { handleTriggerClick, sectionName } = this.props;
    handleTriggerClick(sectionName, !isOpen);
  }

  /**
   * Render.
   */
  render() {
    const { trigger, isOpen, children } = this.props;
    return (
      <ReactCollapsible
        trigger={trigger}
        handleTriggerClick={this.onTriggerClick}
        className={styles.section}
        openedClassName={styles.section}
        triggerClassName={styles.trigger}
        triggerOpenedClassName={classNames(styles.trigger, styles.open)}
        contentInnerClassName={styles.content}
        open={isOpen}
        transitionTime={500}
      >
        {children}
      </ReactCollapsible>
    );
  }
}

export default Collapsible;

Collapsible.propTypes = {
  trigger: PropTypes.string.isRequired,
  sectionName: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleTriggerClick: PropTypes.func.isRequired,
};
