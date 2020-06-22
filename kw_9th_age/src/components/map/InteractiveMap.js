// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, ImageOverlay, Marker, Popup, GeoJSON } from 'react-leaflet'
import L, {CRS} from 'leaflet';
import enhanceWithClickOutside from 'react-click-outside'
import axios from 'axios';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

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

    console.log("Map data props:", props.mapData);

    this.state = {
      mapData:   [{
        type: 'Feature',
        properties: {
          name: "Sample",
          fillColor: "green",
        },
        geometry: { type: 'Polygon', coordinates: [[[0,0], [500,500], [300,700]]] }
      }],    
      selectedRegion: "0", //doesn't exist
    }

    this.areaEntered = this.areaEntered.bind(this);
    this.areaClicked = this.areaClicked.bind(this);
    this.onEachFeature = this.onEachFeature.bind(this);
    this.getMapData = this.getMapData.bind(this);
  }

  /**
   * ComponentDidMount.
   */
  componentDidMount() {
    this.getMapData();    
  }

  /**
   * Retrieves the map data from the server.
   */
  getMapData() {
    const self = this;
    axios.get('http://localhost:3001/world_map')
    .then(function (response) {
      // handle success
      const test = response.data.mapData;
      //console.log("Retrieved data from the server:", test);
      
      self.setState({
        mapData: test,
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
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
    
    this.fillRegion(layer, 0.8, false);
    
    layer.on({
      mouseover: this.regionMouseover.bind(this),
      mouseout: this.regionMouseout.bind(this),
      click: this.regionClicked.bind(this),
    });

  }

  /**
   * User clicked a region.
   */
  regionClicked = (e) => {    
    const layer = e.target;
    const regionName = layer.feature.properties.name;    
    //console.log(`User has selected ${regionName}`); 
  }

  /**
   * User moused over a region
   */
  regionMouseover(e) {
    const layer = e.target;
    this.fillRegion(layer, 1, true);
  }

  /**
   * User moused out of region
   */
  regionMouseout(e) {
    const layer = e.target;
    this.fillRegion(layer, 1, false);
  }

  /**
   * Changes the background colour of a region.
   */
  fillRegion(layer, opacity, isActive) {    
    let fillColor = layer.feature.properties.fillColor;
    
    

    if (isActive) {
      fillColor = "rgba(255,255,255,1)";
    } else {
      if (fillColor !== "transparent") {
        fillColor = `rgba(${layer.feature.properties.fillColor},${opacity})`;
      }      
    }
    fillColor = `rgba(${layer.feature.properties.fillColor},${opacity})`;

    layer.setStyle({
      fillColor,        
    })
    
  }



  /**
   * Create the world map to render.
   */
  buildMap() {
    const bounds = [[0,0], [1522,2048]];

    const test2 = {
      type: 'Feature',
      properties: {

      },
      geometry: { type: 'Polygon', coordinates: [[[0,0], [1,1], [2,2]]] }
    };

    //const geoJson = this.state.mapData ? this.state.mapData : GEOJSON_REGIONS;
    const geoJson = this.state.mapData;// ? test2 : GEOJSON_REGIONS;
    const mapKey = uuidv4();

    console.log("Rendering map with key:", mapKey);
    console.log("Rendering map with data:", geoJson);
    console.log("");
    
    return (
      <Map
        ref="worldMap"
        crs={CRS.Simple}
        center={[383, 512]} // center of image
        zoom={-1.7} 
        minZoom={-1.7}
        maxZoom={3}
        zoomSnap={0.1}
        maxBoundsViscosity={0}
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
          key={mapKey}
          data={geoJson} 
          style={{
            "color": "black",
            "weight": 1,
          }} 
          onEachFeature={this.onEachFeature}          
        />
        
        {/* Marker examples */ }
        <Marker position={[1230, 270]} icon={army1}>
          <Popup>
            Army 1
          </Popup>
        </Marker>
        <Marker position={[900, 420]} icon={army2}>
          <Popup>
            Army 2
          </Popup>
        </Marker>
        <Marker position={[800, 570]} icon={army3}>
          <Popup>
            Army 3
          </Popup>
        </Marker>

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




    const army1 = new L.Icon({
      iconUrl: army,  
      iconRetinaUrl: army,
      iconSize: [15,15],
      className: classNames("leaflet-div-icon", styles.armyIcon, styles.army1),
    
      iconAnchor: [15,5],
      popupAnchor: [15,5],
      iconSize: [25, 25],
    });

    const army2 = new L.Icon({
      iconUrl: army,  
      iconRetinaUrl: army,
      iconSize: [25,25],
      className: classNames("leaflet-div-icon", styles.armyIcon, styles.army2),
    
      iconAnchor: [15,5],
      popupAnchor: [15,5],
      iconSize: [25, 25],
    });

    const army3 = new L.Icon({
      iconUrl: army,  
      iconRetinaUrl: army,
      iconSize: [25,25],
      className: classNames("leaflet-div-icon", styles.armyIcon, styles.army3),
    
      iconAnchor: [15,5],
      popupAnchor: [15,5],
      iconSize: [25, 25],
    });    