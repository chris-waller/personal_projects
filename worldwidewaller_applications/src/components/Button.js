// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// style imports
import styles from './styles/button.scss';

/**
 * A simple component to ensure all button elements have consistancy throughout the app.
 */
// eslint-disable-next-line react/prefer-stateless-function
class Button extends Component {
  /**
   * Redner.
   */
  render() {
    const buttonClassName = classNames(
      styles.button,
      !this.props.sizeIsMax ? styles.min : null,
    );

    return (
      <div className={styles.container}>
        <button
          type="button"
          onClick={() => this.props.onClick()}
          className={buttonClassName}
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  sizeIsMax: PropTypes.bool,
};

Button.defaultProps = {
  sizeIsMax: true,
};
