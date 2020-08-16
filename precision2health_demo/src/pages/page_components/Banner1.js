// npm imports
import React, {Component} from 'react';

// style imports
import styles from '../css/banner.scss';

/**
 * The first banner containing the 'Book Now' button.
 */
class Banner1 extends Component {

/**
 * Render.
 */
render() {
  return(
    <React.Fragment>
      <div className={styles.banner}>
        <div className={styles.header}>
          <h1 className={styles.quote}>
            "We don't push bones into place we think them into place" E. Tucker
          </h1>  
        </div>
        <div className={styles.bookNow}>
          <div className={styles.bookNow}>
            <a 
              href="https://precision2healthosteopathy.janeapp.com/" 
              className={styles.bookNow}
              target="_"
            >
              Book Now
          </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

}


export default Banner1;