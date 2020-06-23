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
      mapData:   [{        
      }],
      legions: [],
      zoomLevel: -1.7,
      selectedRegion: "0", //doesn't exist
    }

    this.areaEntered = this.areaEntered.bind(this);
    this.areaClicked = this.areaClicked.bind(this);
    this.onEachFeature = this.onEachFeature.bind(this);
    this.getMapData = this.getMapData.bind(this);
    this.generateMarkers = this.generateMarkers.bind(this);   
    this.test = this.test.bind(this); 
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
    .then((response) => {   
      
      const mapData = response.data.regions;   
      const legions = response.data.legions;
            
      self.setState({
        mapData,
        legions,
      });
    })
    .catch((error) => {      
      console.error(error);
    })
    .finally(() => { /*do nothing */ });
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
    // don't think I'll need this event but keeping it here just in case
  }

  /**
   * 
   * @param feature contains properties to add to the layer
   * @param layer   the layer we are modifying
   */
  onEachFeature = (feature, layer) => {
    const popup = `<Popup>${feature.properties.name}</Popup>`;
    layer.bindPopup(popup);
    
    this.fillRegion(layer, false);
    
    // bind events to each layer
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
    console.log(`User has selected ${regionName}`); 
  }

  /**
   * User moused over a region
   */
  regionMouseover(e) {
    const layer = e.target;
    this.fillRegion(layer, true);
  }

  /**
   * User moused out of region
   */
  regionMouseout(e) {
    const layer = e.target;
    this.fillRegion(layer, false);
  }

  /**
   * Changes the background colour and opacity of a region.
   */
  fillRegion(layer, isActive) {    
    let fillColor = layer.feature.properties.fillColor;
    let opacity = 0.5;

    if (fillColor === null) {
      opacity = isActive ? opacity : 0;
      fillColor = `rgba(255,255,255,${opacity})`; 
      
    }
    else {
      opacity = isActive ? 0.7 : 0.5;
      fillColor = `rgba(${layer.feature.properties.fillColor},${opacity})`;       
    }

    layer.setStyle({
      fillColor,
      fillOpacity: opacity,
    })
    
  }



  /**
   * Create the world map to render.
   */
  buildMap() {
    const bounds = [[0,0], [1522,2048]];
    const geoJson = this.state.mapData;

    // the geoJSON object will be re-drawn whenever it receives a new key
    const mapKey = uuidv4();
    
    return (
      <Map
        ref="worldMap"
        crs={CRS.Simple}
        center={[383, 512]} 
        zoom={this.state.zoomLevel} 
        minZoom={-1.7}
        maxZoom={0.6}
        zoomSnap={0.1}
        maxBoundsViscosity={0}
        className={styles.mapLayer}
        attributionControl={false}
        zoomControl={false}
        maxBounds={bounds}
        onZoom={this.test}      
      >
        {/* the map image */}
        <ImageOverlay 
          url={mainImage} 
          bounds={bounds}
          className={styles.test}
        />

        {/*GeoJSON */}
        <GeoJSON           
          key={mapKey}
          data={geoJson} 
          style={{
            "color": "rgb(0, 0, 0)",
            "weight": "1",
            "fillColr": "rgb(255,0,0)",
            "fillOpacity": "0", 
          }} 
          onEachFeature={this.onEachFeature}          
        />

        {this.generateMarkers()}        

      </Map>  
    );
  } 

  test() {
    this.setState({
      zoomLevel: this.refs.worldMap.leafletElement.getZoom(),
    });
  }

  /**
   * Generate all markers for the map
   */
  generateMarkers() {

    let legionMarkers = [];

    const mapData = this.state.mapData;    

    this.state.legions.forEach((legion) => {

      const color = legion.color;
      const colorName = legion.colorName;
      const legionClass = `${colorName}Legion`;

      // get the region this army is currently in
      const mapData = this.state.mapData;      
      const region = mapData.find(r => r.properties.id === legion.regionId);            
                  
      // L.icon won't accept styles.
      // Instead of creating a stylesheet with pre-defined styles, we create them here.
      // First we check we haven't already added this class
      if (document.getElementById(legionClass) === null) {
        let style = document.createElement("style");
        style.type = 'text/css';
        style.setAttribute("id", legionClass);
        style.innerHTML = `.${legionClass} { background-color: rgb(${color}); }`;
        document.getElementsByTagName('head')[0].appendChild(style);  
      }

      let currentZoomLevel = this.state.zoomLevel;
      // zoom levels (-1.7 to 0.6)
      currentZoomLevel += 1.7;
      currentZoomLevel *= 10;
      
      const iconSize = [15 + currentZoomLevel, 15 + currentZoomLevel];
      

      const legionIcon = new L.Icon({
        iconUrl: army,  
        iconRetinaUrl: army,
        iconSize,
        className: classNames("leaflet-div-icon", styles.armyIcon, `${legionClass}`),      
        //iconAnchor: [15,5],
        //popupAnchor: [15,5],        
      });

      // create the marker to add to Leaflet
      const legionMarker = React.createElement(
        Marker, 
        {
          position: this.calculateRegionCenter(region),
          icon: legionIcon,
          key: uuidv4(),
        },
        <Popup>
          {legion.name}
        </Popup>
      );


      legionMarkers.push(legionMarker);
    });

    return React.createElement(React.Fragment, {}, legionMarkers); 
  }

  /**
   * Closes any popup when the user clicks off the map
   */
  handleClickOutside() {    
    this.refs.worldMap.leafletElement.closePopup();
  }

  /**
   * Determine the center point of the region   
   */
  calculateRegionCenter(region) {
    //console.log("Region Here", region);

    // calculate region width    
    const regionWidth = (region.geometry.coordinates[0][3][0] - region.geometry.coordinates[0][0][0]) / 2;
    //console.log("width", regionWidth);

    // calculate region height
    const regionHeight = (region.geometry.coordinates[0][4][1] - region.geometry.coordinates[0][2][1]) / 2;
    //console.log("height", regionHeight);
    
    const regionCenter = [
      region.geometry.coordinates[0][2][1] + regionHeight,
      region.geometry.coordinates[0][0][0] + regionWidth      
    ];

    return regionCenter    
  }


  /**
   * Render.
   */
  render() {  
    return(
      <div className={styles.interactiveMapWrapper}>
        {this.buildMap()}   
      </div>
    );
  }
}

export default enhanceWithClickOutside(InteractiveMap);

InteractiveMap.propTypes = {
  areaSelected: PropTypes.func.isRequired,
};
