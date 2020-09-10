// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// style imports
import styles from './styles/modal.scss';

/**
 * Simple modal dialogue component.
 */
class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.keyPressed, false);
    document.addEventListener('mousedown', this.mousePressed, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyPressed, false);
    document.removeEventListener('mousedown', this.mousePressed, false);
  }

  mousePressed = (event) => {
    // close modal on right click
    if (event.button === 2) {
      // this.closeModal();
    }
  }

  keyPressed = (event) => {
    // close modal on escape key
    if (event.keyCode === 27) {
      this.closeModal();
    }
  }

  closeModal = () => {
    this.props.closeModal();
  }

  contentClicked = (event) => {
    event.stopPropagation();
  }

  render() {
    const { children } = this.props;
    return (
      <div className={styles.modalContainer} onClick={this.closeModal}>
        <div className={styles.modalContent} onClick={this.contentClicked}>
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

Modal.defaultProps = {
};
