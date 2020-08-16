import React, {Component} from 'react';

// resource imports
import styles from '../css/about.scss';

/**
 * About Us Page/Section.
 */
class About extends Component {
  render() {
    const p1 = "Our mission is to provide safe and effective treatment to all, whether you suffer from a chronic or an acute condition, or want to improve your posture and regain functional movement to enhance your sports performance or day-to-day lifestyle.";
    const p2 = "Having a Personal Training and sports background myself, has allowed me to understand the physical requirements and abilities to participate in sports safely and how to recover from injury or adapt to special needs. Over the last 12 years I have worked in Postural reeducation, functional training and strength training for all ages. I particularly enjoyed working with seniors.";
    const p3 = "Over the past two years, I have worked more closely with all level of athletes from olympic, professional, competitive to everyday fitness level in various sports, namely, Boxing, Baseball, Golf and BodyBuilding, among other.";

    return (
      <div className={styles.about}>
        <div className={styles.aboutOverlay}>
          <h3 className={styles.title}>About us</h3>
          <div className={styles.pageContent}>
            <div>{p1}</div>
            <div>{p2}</div>            
            <div>{p3}</div>            
          </div>
        </div>        
      </div>
    );
  }
}

export default About;