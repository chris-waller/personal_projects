// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageMapper from 'react-image-mapper';

// Style imports
import styles from './interactive-map.scss';

// Image imports
import mainImage from '../../images/world.png';

// Utility imports
import {MAP} from "../../utilities/world_image_map"

/**
 * Display and interacte with the world map
 */
class InteractiveMap extends Component {

  /**
   * Constructor.
   */
  constructor(props) {
    super(props)

    this.state = {

    };

    this.areaEntered = this.areaEntered.bind(this);
    this.areaClicked = this.areaClicked.bind(this);
  }

    /**
   * User has clicked an area on the map
   */
  areaClicked(area) { 
    this.props.areaSelected(area);
  }

  /**
   * User moused over an area on the map
   */
  areaEntered(area) {
    this.setState({
      currentRegion: {
        coordinates: area.coords,
        name: area.name,
        terrain: area.terrain
      }      
    });
  }

  /**
   * Render.
   */
  render() {
    return(
      <div className={styles.ineractiveMap}>
        <ImageMapper section="the_image_mapper"
          src={mainImage}
          map={MAP}
          width={1200}
          height={400}
          imgWidth={1810}
          lineWidth={5}
          onClick={area => this.areaClicked(area)}
          onMouseEnter={area => this.areaEntered(area)}
        />
      </div>
    );
  }
}

export default InteractiveMap;

InteractiveMap.propTypes = {
  areaSelected: PropTypes.func.isRequired,
};