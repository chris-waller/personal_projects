// npm imports
import React, {Component} from 'react';

// style imports
import styles from '../css/banner.scss';

/**
 * Banner with quote and image.
 */
class Banner2 extends Component {

/**
 * $ender.
 */
render() {
  return(
    <React.Fragment>
      <div className={styles.banner}>
        <div className={styles.header}>
          <h1 className={styles.quote}>
            “Long lasting lifestyle change, one habit at a time.” S. Loureiro
          </h1>  
          <p className={styles.subQuote}>We look forward to your visit!</p>
        </div>
        <div className={styles.bookNow}>
          <div className={styles.officeImage2}/>
        </div>
      </div>
    </React.Fragment>
  );
}

}


export default Banner2;