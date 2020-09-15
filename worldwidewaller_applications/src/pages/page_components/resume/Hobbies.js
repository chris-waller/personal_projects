// npm imports
import React from 'react';
import PropTypes from 'prop-types';

// custom components
import Collapsible from '~/components/Collapsible';

// style imports
import styles from './styles/hobbies.scss';

const Hobbies = (props) => {
  const { sectionName, isOpen, handleTriggerClick } = props;
  return (
    <Collapsible
      key="Hobbies Section"
      trigger="Hobbies"
      isOpen={isOpen}
      sectionName={sectionName}
      handleTriggerClick={handleTriggerClick}
    >
      <div className={styles.hobbiesContainer}>
        <p className={styles.tilde}>~</p>
        <p className={styles.hobby}>Reading</p>
        <p className={styles.tilde}>~</p>
        <p className={styles.hobby}>Video Games</p>
        <p className={styles.tilde}>~</p>
        <p className={styles.hobby}>Tabletop Gaming</p>
        <p className={styles.tilde}>~</p>
        <p className={styles.hobby}>Running</p>
        <p className={styles.tilde}>~</p>
        <p className={styles.hobby}>Weights / Cardio</p>
        <p className={styles.tilde}>~</p>
        <p className={styles.hobby}>Mud Runs</p>
        <p className={styles.tilde}>~</p>
        <p className={styles.hobby}>Ultimate Frisbee</p>
        <p className={styles.tilde}>~</p>
        <p className={styles.hobby}>African Cichlids</p>
        <p className={styles.tilde}>~</p>
        <p className={styles.hobby}>Halloween</p>
        <p className={styles.tilde}>~</p>
      </div>
    </Collapsible>
  );
};

export default Hobbies;

Hobbies.propTypes = {
  sectionName: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleTriggerClick: PropTypes.func.isRequired,
};
