// npm imports
import React, {Component} from 'react';

// style imports
import styles from '../css/locations.scss';

/**
 * Locations Section/Page
 */
class Locations extends Component {
  
  /**
   * Render.
   */
  render() {
    return (
      <div className={styles.services}>
        <div className={styles.servicesOverlay}>
          <h2 className={styles.title}>Locations & Hours of Operation</h2>
          <div className={styles.heading}>
            

            <div className={styles.locations}>

              <div className={styles.location}>
                <div>Sydfit Health and Wellness Centre</div>
                <div>1253 King St E, Unit 2</div>
                <div>Kitchener, ON, N2G 2N5</div>
                <a href="https://sydfithealth.ca" target="_">https://sydfithealth.ca</a>
                <br /><br />
                <div className={styles.hours}>
                  <div>Hours:</div>
                  <div>Tuesday: 8 am - 2pm</div>
                  <div>Wednesday: 10 am - 8pm</div>
                  <div>Thursday: 8 am - 8pm</div>
                  <div>Friday: 9am - 8pm</div>
                  <div>Saturday: 10am - 2 pm</div>
                  <div>Sunday: Closed</div>         
                </div>                 
              </div>   

              <div className={styles.location}>
                <div>Mosou Health Clinic & Yoga Studio</div>
                <div>161 Victoria St S</div>
                <div>Kitchener, ON, N2G 2B7</div>             
                <a href="https://mosuo.ca" target="_">https://mosuo.ca</a>
                <br /><br />
                <div className={styles.hours}>
                  <div>Hours:</div>
                  <div>Mondays: 9 am - 8pm</div>
                </div>              
              </div>  
            </div>
          </div>  
       </div>
          
      </div>
    );
  }
}

export default Locations;