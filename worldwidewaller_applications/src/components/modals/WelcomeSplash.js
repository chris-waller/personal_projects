// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// custom components & helpers
import Modal from './Modal';
import Purpose from '~/pages/page_components/purpose/Purpose';
import UpcomingFeatures from '~/pages/page_components/features/UpcomingFeatures';
import ReleaseNotes from '~/pages/page_components/features/ReleaseNotes';
import Button from '~/components/Button';

// style imports
import styles from './styles/welcome_splash.scss';

class WelcomeSplash extends Component {
  render() {
    return (
      <Modal closeModal={this.props.closeModal}>
        <div className={styles.welcomeContainerWrapper}>
          <div className={styles.welcomeContainer}>

            <h3>Welcome to my ReactJS Web Application</h3>

            {/* eslint-disable-next-line css-modules/no-undef-class */}
            <h4>Purpose:</h4>
            <Purpose />

            {/* eslint-disable-next-line css-modules/no-undef-class */}
            <h4>Upcoming Features:</h4>
            <h5>What&apos;s up next?</h5>
            <UpcomingFeatures />

            <h4>Release Notes:</h4>
            <ReleaseNotes />

            <div className={styles.closeModalButton}>
              <Button text="close" onClick={this.props.closeModal} />
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default WelcomeSplash;

WelcomeSplash.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
