// npm imports
import React, {Component} from 'react';
import Collapsible from 'react-collapsible';

// stye imports
import styles from '../css/osteopathy.scss';

/**
 * 'What is Osteopathy?' Section/Page.
 */
class Osteopathy extends Component { 

  /**
   * Constructor.
   */
  constructor(props) {
    super(props);
    
    this.state = {
      isCollapsed: true,
    };

    this.collapseClicked = this.collapseClicked.bind(this);
  }

  /**
   * Toggle function for collapsible section.
   */
  collapseClicked() {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  }

  /**
   * Render.
   */
  render() {
    const p1 = "Osteopathy is a gentle form of manual therapy to assess and treat the whole body. The Osteopathic Manual Practitioner will treat based on their findings and investigation in to the root cause of dysfunction in the body. This can help ease movement restrictions and fluid dynamics such as improved circulation and optimal nerve conduction. These manipulations can also be used to reduce swelling, improve tissue mobility, and promote overall optimal functioning and healing in all ages.Helping manage chronic and acute pain, headaches, menstrual cramps, digestion, constipation, respiratory difficulties, knee, back and neck pain";
    const p2 = "Treatments methods utilized include:";
    const p3 = "Soft tissue manipulation - Ensuring good supply of neuro-vascular flow to prevents harmful retention and allowing the body’s immune system to function effectively.";
    const p4 = "Articular manipulation - involves joints and ligaments and is used to reduce muscle spasms, reduce neurological irritations, improve joint mobility, and remove pain and discomfort. No voluntary or forced popping or cracking is involved in this approach..";
    const p5 = "Visceral manipulation - encourages and influences the better function of the lungs, liver, spleen, kidneys, stomach, pancreas, intestines, the bladder, and the uterus. It's through gentle manipulation of their surrounding structures that promote optimized organ, physiological and neurological, response and function."    

    const collapseText = (this.state.isCollapsed) ? "[Read more...]" : "[Read less...]";

    return(
      <div className={styles.osteopathy}>
        <div className={styles.osteopathyOverlay}>
          <h2 className={styles.title}>What is Osteopathy?</h2>
          <div className={styles.pageContent}>
                
            <div className={styles.summary}>{p1}</div>
            <Collapsible
              triggerClassName={styles.collapsible}
              triggerOpenedClassName ={styles.collapsible}
              trigger={collapseText}
              onOpen={this.collapseClicked}
              onClose={this.collapseClicked}
            >
              <div className={styles.summary}>{p2}</div>
              <div className={styles.summary}>{p3}</div>
              <div className={styles.summary}>{p4}</div>
              <div className={styles.summary}>{p5}</div>    
            </Collapsible>
            
          </div>
        </div>                
      </div>
    );
  }

};

export default Osteopathy;