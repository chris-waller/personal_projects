// npm imports
import React, {Component} from 'react';

// style imports
import styles from '../css/services.scss';

/**
 * Services Section/Page.
 */
class Services extends Component {

  /**
   * Constructor.
   */
  constructor() {
    super();

    this.bookAppointment = this.bookAppointment.bind(this);
  }

  /**
   * Open's a new tab to the main precision2health booking site.
   */
  bookAppointment() {
    window.open("https://precision2healthosteopathy.janeapp.com/");
  }

  /**
   * Render.
   */
  render() {
    const p1 = "We treat adults and children (contact for more information)";
    const p2 = "We offer complimentary 15 min, in-person or over the phone, consultations to see if this is the right therapy for you";
    const p3 = "Accepted by most extended health care benefit packages"
    const p4 = "Consultations in English and Portuguese available";
    const p5 = "Please note, we are not registered to participate in active MVA or WSIB claims";

    return (
      <div className={styles.services}>
        <div className={styles.servicesOverlay}>
          <h1 className={styles.whiteOverride}>Services</h1>   
          <div className={styles.heading}>
            <ul className={styles.list}>
              <li className={styles.whiteOverride}>{p1}</li>
              <li className={styles.whiteOverride}>{p2}</li>
              <li className={styles.whiteOverride}>{p3}</li>
              <li className={styles.whiteOverride}>{p4}</li>
              <li className={styles.whiteOverride}>{p5}</li>
            </ul>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Services;