// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, ImageOverlay, Marker, Popup, GeoJSON } from 'react-leaflet'
import L, {CRS} from 'leaflet';
import enhanceWithClickOutside from 'react-click-outside'
import classNames from 'classnames';

// Style imports
import styles from './interactive-map.scss';

// Image imports
import mainImage from '../../images/keawol_empty.jpg';
import army from '../../images/army.png';

// Utility imports
import {GEOJSON_REGIONS} from "../../utilities/world_image_map"

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
      selectedRegion: "0", //doesn't exist
    }

    this.areaEntered = this.areaEntered.bind(this);
    this.areaClicked = this.areaClicked.bind(this);
    this.onEachFeature = this.onEachFeature.bind(this);
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
        //coordinates: area.coords,
        //name: area.name,
        //terrain: area.terrain
      }      
    });
  }

  // `component` is now the first argument, since it's passed through the Function.bind method, we'll need to pass it through here to the relevant handlers
  onEachFeature = (feature, layer) => {
    const popup = `<Popup>${feature.properties.name}</Popup>`;
    layer.bindPopup(popup);
    //layer.onClick = this.regionClicked.bind("foo");
    layer.onClick = this.regionClicked.bind(feature.properties.name, "foo");
    console.log("check", layer);
  }

  regionClicked = (foo, bar) => {
    alert("here"); 
    console.log("Region clicked:", foo);    
    console.log("Region clicked2:", bar);    
  }



  /**
   * Create the world map to render.
   */
  buildMap() {
    const bounds = [[0,0], [766,1024]];
    
    return (
      <Map
        ref="worldMap"
        crs={CRS.Simple}
        center={[383, 512]} // center of image
        zoom={0} 
        //minZoom={0}
        maxZoom={3}
        //maxBoundsViscosity={1}
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

        {/*GeoJSON */}
        <GeoJSON 
          ref="foo"
          data={GEOJSON_REGIONS} 
          style={{"background-color": "red", "color": "red" }} 
          onEachFeature={this.onEachFeature}          
        />
        
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

  handleClickOutside() {    
    this.refs.worldMap.leafletElement.closePopup();
  }


  /**
   * Render.
   */
  render() { 
 
    return(
      <div className={styles.interactiveMapWrapper} section="div_before_map">
        {this.buildMap()}   
      </div>
    );
  }
}

export default enhanceWithClickOutside(InteractiveMap);

InteractiveMap.propTypes = {
  areaSelected: PropTypes.func.isRequired,
};



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