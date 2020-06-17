// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, ImageOverlay, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import enhanceWithClickOutside from 'react-click-outside'
import classNames from 'classnames';

// Style imports
import styles from './interactive-map.scss';

// Image imports
import mainImage from '../../images/world_hex.png';
import army from '../../images/army.png';

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

    const army1 = new L.Icon({
      iconUrl: army,  
      iconRetinaUrl: army,
      iconSize: [25,25],
      className: classNames("leaflet-div-icon", styles.army1),
    
      iconAnchor: [15,5],
      popupAnchor: [15,5],
      iconSize: [25, 25],
    });

    const army2 = new L.Icon({
      iconUrl: army,  
      iconRetinaUrl: army,
      iconSize: [25,25],
      className: classNames("leaflet-div-icon", styles.army2),
    
      iconAnchor: [15,5],
      popupAnchor: [15,5],
      iconSize: [25, 25],
    });

    const army3 = new L.Icon({
      iconUrl: army,  
      iconRetinaUrl: army,
      iconSize: [25,25],
      className: classNames("leaflet-div-icon", styles.army3),
    
      iconAnchor: [15,5],
      popupAnchor: [15,5],
      iconSize: [25, 25],
    });

    return (
      <Map
        ref="worldMap" 
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
        <Marker position={[5.5, 15.5]} icon={army1}>
          <Popup>
            Army 1
          </Popup>
        </Marker>
        <Marker position={[4.5, 19]} icon={army2}>
          <Popup>
            Army 2
          </Popup>
        </Marker>
        <Marker position={[7.5, 15.5]} icon={army3}>
          <Popup>
            Army 3
          </Popup>
        </Marker>
      </Map>  
    );
  }

  onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
  }  

  handleClickOutside() {
    console.log(this.refs.worldMap)
    this.refs.worldMap.leafletElement.closePopup();
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

export default enhanceWithClickOutside(InteractiveMap);

InteractiveMap.propTypes = {
  areaSelected: PropTypes.func.isRequired,
};