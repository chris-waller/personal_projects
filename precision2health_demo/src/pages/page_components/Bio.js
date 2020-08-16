// npm impodrts
import React, {Component} from 'react';
import Collaspible from 'react-collapsible';

// style imports
import styles from '../css/bio.scss';

/**
 * Bio Page/Section
 */
class Bio extends Component {

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
    const p1="Sylvia has always been an advocate of helping individuals of all ages, abilities and fitness experience to achieve their health and fitness goals, namely empowering women.";
    const p2= "She graduated with a Teachers Degree in Sports, Leisure and Physical Education in Portugal, and later continuing her studies in human biomechanics in Canada. Over the past decade, she has been passionately working as a Certified Personal Trainer with focus on helping many clients improve their mobility, strength, weight loss, and confidence. She felt the need to do more and further her scope of practice, which led her to successfully complete a principles-based classical osteopathic education, earning a Master of Practice Diploma in Osteopathic Manual Sciences from the Canadian Academy of Osteopathy. She is a proud member of OSTCAN (Osteopathy Canada) and an active member of the OOA (Ontario Osteopathic Association).";
    const p3= "In her free time, Sylvia loves to travel, learn about new cultures and traditions, keep active and in touch with nature. Living a balanced active lifestyle, while enjoying food and playing a great array of sports, such as soccer, boxing, Latin and African dances, winter sports, yoga and pilates.";
    const p4= "She is eager to further assist all those who seek improved health, functional and active lifestyle.";

    const collapseText = (this.state.isCollapsed) ? "[Read more...]" : "[Read less...]";

    return(
      <div className={styles.bio}>

        <h3>Sylvia Loureiro M.OMSc</h3>
        <div className={styles.pictureRow}>
          <div className={styles.bioImageWrapper}>
            <div className={styles.bioImage}/>
          </div>
          <div className={styles.bioText}>
            <div>{p1}</div>
            <div>{p2}</div>
        
            <Collaspible 
              trigger={collapseText} 
              contentInnerClassName={styles.noMargin}
              contentOuterClassName={styles.noMargin}
              triggerClassName={styles.collapsible}
              triggerOpenedClassName ={styles.collapsible}
              onOpen={this.collapseClicked}
              onClose={this.collapseClicked}           
            >
              <p>{p3}</p>
              <br />
              <p>{p4}</p>
            </Collaspible>
            
          </div>
        </div>        
      </div>
    );
  }


}


export default Bio;