// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

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
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    }

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
   * Create the world map to render.
   */
  buildMap() {
    const position = [this.state.lat, this.state.lng];

    return (
      <Map 
        center={position} 
        zoom={13} 
        className={styles.interactiveMap}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
      </Map>  
    );
  }

  /**
   * Render.
   */
  render() { 
 
    return(
      <div className={styles.interactiveMapWrapper} section="div_before_map">
        {this.buildMap()}      

        {/*
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
        */}
      </div>
    );
  }
}

export default InteractiveMap;

InteractiveMap.propTypes = {
  areaSelected: PropTypes.func.isRequired,
};