// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, ImageOverlay, Marker, Popup, GeoJSON, TileLayer } from 'react-leaflet'
import L, {CRS} from 'leaflet';
import enhanceWithClickOutside from 'react-click-outside'
import classNames from 'classnames';

// Style imports
import styles from './interactive-map.scss';

// Image imports
import mainImage from '../../images/keawol.png';
import army from '../../images/army.png';

// Utility imports
import {MAP2} from "../../utilities/world_image_map"

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

  componentDidMount() {
    const bounds = this.refs.worldMap.leafletElement.getBounds();
    console.log("Bounds: ", bounds);
  }

  /**
   * Create the world map to render.
   */
  buildMap() {
    const bounds = [[0,0], [383, 512]];

    /*
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
    */

    return (
      <Map
        ref="worldMap"
        crs={CRS.Simple}
        center={[192, 256]} 
        zoom={0} 
        minZoom={1}
        maxZoom={3}
        className={styles.mapLayer}
        attributionControl={false}
        zoomControl={false}
        maxBounds={bounds}
      >

        <ImageOverlay 
          url={mainImage} 
          bounds={bounds}
          className={styles.test}
        />
        
        {/*
        <TileLayer 
          url={mainImage}
          noWrap={true}
          className={styles.tileLayer}
        />
        */}
        

        {/*GeoJSON */}
        {/*
        <GeoJSON 
          data={MAP2} 
          style={{"background-color": "red", "color": "red" }} 
        />
        */}
        
        {/* Marker examples 
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
        */}

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