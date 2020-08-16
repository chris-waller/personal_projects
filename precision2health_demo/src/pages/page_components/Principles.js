// npm imports
import React, { Component } from 'react';

// style imports
import styles from '../css/principles.scss';

/**
 * This component is responsible for displaying the site header.
 */
class Principles extends Component {
   
  /**
   * Render.
   */
  render() {
    const title = "Principles based Classical Osteopathy";
    const text1 = "Dr. A.T. Still, the founder of Osteopathy, introduced this concept of treatment in the 1870s, and presented it as a science, a philosophy, and a practice. Manual Osteopathic Practitioners do not see themselves as healers, but instead as facilitators to health. The 4 cornerstones of Osteopathy are: The body is a unit; it self-heals and self-regulates to maintain health; structure and function are reciprocally interrelated; rational treatment is based on the understanding of the above principles.";
    const quote = "\"Find it, Fix it, Leave it alone\". A.T. Still";
    return (
      <div className={styles.principles}>       
        <h3>{title}</h3>
        <div>
          {text1}
        </div>
        <h2 className={styles.quote}>
          {quote}
        </h2>
      </div>
    )
  }
}

export default Principles;