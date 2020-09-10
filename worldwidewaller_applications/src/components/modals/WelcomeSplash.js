// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// custom components & helpers
import Modal from './Modal';
import Button from '~/components/Button';
import { ReleaseNotes, UpcomingFeatures } from '~/resources/ReleaseNotes';

// style imports
import styles from './styles/welcome_splash.scss';

class WelcomeSplash extends Component {
  render() {
    return (
      <Modal closeModal={this.props.closeModal}>
        <div className={styles.welcomeContainerWrapper}>
          <div className={styles.welcomeContainer}>
            <h3>Welcome to my ReactJS Web Application</h3>
            <p>The purpose of this application is threefold:</p>
            <ul>
              <li>Provide a unique way of presenting my resume to prospective employers</li>
              <li>Demonstrate that I can actually do what my resume claims I can do</li>
              <li>
                {`Establish a solid code-base for future projects so I can spend more of my
                future development time learning new skills rather than trying to solve a problem
                I have already run into`}
              </li>
            </ul>

            <div className={styles.releaseNotes}>
              <h4>Release Notes:</h4>
              {
                ReleaseNotes.map((releaseNote) => (
                  <>
                    <h5 key={`release_data_${releaseNote.releaseDate}`}>
                      {releaseNote.releaseDate}
                    </h5>
                    <ul>
                      {
                        releaseNote.details.map((detail) => (
                          <li>{detail}</li>
                        ))
                      }
                    </ul>
                  </>
                ))
              }
            </div>

            <div className={styles.upcomingFeatures}>
              <h4>Upcoming Features:</h4>
              {
                UpcomingFeatures.map((feature) => (
                  <>
                    <ul>
                      <li>{feature}</li>
                    </ul>
                  </>
                ))
              }
            </div>

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
