// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, ImageOverlay, GeoJSON } from 'react-leaflet'

// Style imports
import styles from './interactive-map.scss';

// Image imports
import mainImage from '../../images/world_hex.png';

// Utility imports
import {MAP} from "../../utilities/world_image_map"


const geojsonFeature = {
  "type": "Feature",
  "properties": {
      "name": "Some Point",      
      "popupContent": "This is the first popup I made!"
  },
  "geometry": {
      "type": "Point",
      "coordinates": [15,5]
  }
};



/**
 * Display and interacte with the world map
 */
class InteractiveMap extends Component {

  /**
   * Constructor.
   */
  constructor(props) {
    super(props)

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
    const bounds = [[0,0], [10, 30]];

    return (
      <Map 
        center={[5, 15]} 
        zoom={6} 
        minZoom={6}
        maxZoom={8}
        className={styles.interactiveMap}
        attributionControl={false}
        zoomControl={false}
        maxBounds={bounds}
      >
        <ImageOverlay url={mainImage} bounds={bounds} />
        <GeoJSON 
          data={geojsonFeature}  
          onEachFeature={this.onEachFeature}  
        />
      </Map>  
    );
  }

  onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
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