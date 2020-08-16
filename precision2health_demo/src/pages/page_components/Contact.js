// npm imports
import React, {Component} from 'react';

// style imports
import styles from '../css/contact.scss';

// image imports
import facebookLogo from '../../images/facebook.png';
import instagramLogo from '../../images/instagram.png';
import linkedinLogo from '../../images/linkedin.png';

/**
 * Contact Us Section/Page
 */
class Contact extends Component {
  
  /**
   * Render.
   */
  render() {
    return (
      <div className={styles.contact}>
        <div className={styles.contactOverlay}>
          <div className={styles.heading}>
            <h2 className={styles.title}>Contact Us</h2>
            <div className={styles.info}>
              <span>Phone:&nbsp;</span>
              <span className={styles.phone}>519-498-5185</span>
            </div>
            <div className={styles.info}>
              <span>Email:&nbsp; </span>            
              <a href="mailto:precision2health@gmail.com">
                precision2health@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div>
            <a 
              href="https://www.instagram.com/sylvia.precision2health/" 
              className={styles.socialLinks}
            >
              <img src={instagramLogo} className={styles.socialLinks} />
            </a>
          </div>
          <div>
            <a 
              href="https://www.facebook.com/Precision2HealthOsteopathy/" 
              className={styles.socialLinks}
            >
              <img src={facebookLogo} className={styles.socialLinks} />
            </a>
          </div>
          <div>
            <a 
              href="https://www.linkedin.com/in/sylvia-loureiro-90262b14/" 
              className={styles.socialLinks}
            >
              <img src={linkedinLogo} className={styles.socialLinks} />
            </a>
          </div>
        </div>

      </div>
    );
  }
}

export default Contact;