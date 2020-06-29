// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, ImageOverlay, Marker, Popup, GeoJSON } from 'react-leaflet';
import L, {CRS} from 'leaflet';
import enhanceWithClickOutside from 'react-click-outside';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

// Custom Components
import LegionModal from './LegionModal';
import {getLegionIcon} from '../../helpers/HelperMethods';

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
      // geoJSON map data -- contains region coords, names and colours
      mapData:   [{        
      }],
      // list of legions that are currently on the map
      legions: [],
      // list colours to be used in the legion colour dropdown
      legionColours: [],
      // current zoom level of the Leaflet map
      zoomLevel: -1.7,
      // the geoJSON object will be re-drawn whenever it receives a new key
      mapKey: uuidv4(),
      // indicates if the add legion modal is currently open
      addLegionModalOpen: false,
      // indicates if the move legion modal is currently open
      moveLegionModalOpen: false,
      // the currently selected region
      selectedRegion: null,
      // the currently selected legion
      selectedLegion: null,
      // any errors returned from the server
      serverError: null,
    }

    this.areaEntered = this.areaEntered.bind(this);
    this.areaClicked = this.areaClicked.bind(this);
    this.legionClicked = this.legionClicked.bind(this);
    this.onEachFeature = this.onEachFeature.bind(this);
    this.getMapData = this.getMapData.bind(this);
    this.generateMarkers = this.generateMarkers.bind(this);   
    this.mapZoom = this.mapZoom.bind(this); 
    this.addLegion = this.addLegion.bind(this);
    this.getLegionColours = this.getLegionColours.bind(this);
    this.moveLegion = this.moveLegion.bind(this);
    this.toggleAddLegionModal = this.toggleAddLegionModal.bind(this);
    this.toggleMoveLegionModal = this.toggleMoveLegionModal.bind(this);
  }

  /**
   * ComponentDidMount.
   */
  componentDidMount() {    
    this.getLegionColours();
    this.getMapData();    
  }

  /**
   * Gets a list of all possible legion colours for use in the dropdown
   */
  getLegionColours() {
    const self = this;

    axios.get('http://localhost:3001/legion_colours')
    .then((response) => {  
      const legionColours = response.data;
      self.setState({
        legionColours,
      });      
    })
    .catch((error) => {      
      console.error("Error retrieving legion colours", error);
      this.setState({
        legionColours: [{
          id: -1,
          name: "--Unavailable--",
          rgb: "-1,-1-,1",
        }]
      });
    })
    .finally(() => { /*do nothing */ });
  }  

  /**
   * Retrieves the map data from the server.
   * First, we get the region data and set the state.
   * Next, we get the legion data. The legion data must be retrieved after the region data
   * as the former needs to determine coordinates based on the latter.
   */
  getMapData() {
    const self = this;

    axios.get('http://localhost:3001/regions')
    .then((response) => {  
      const mapData = response.data;   
      const mapKey = uuidv4();                  
      self.setState({
        mapData,
        mapKey,
        selectedRegion: null,
        selectedLegion: null,
      });      
    })
    .then(() => {     
      this.getLegions();      
    })    
    .catch((error) => {      
      console.error("Error retrieving region data. Will not attempt to get legion data.", error);
    })
    .finally(() => { /*do nothing */ });
  }

  getLegions() {
    const self = this;
    axios.get('http://localhost:3001/legions')
    .then((response) => {        
      const legions = response.data;        
      self.setState({
        legions,
      })      
    })    
    .catch((error) => {      
      console.error("Error retriving legion data", error);
    })
    .finally(() => { /*do nothing */ });
  }

  addLegion(legionName, regionId, colourId) {
    // This will only occur if the legion colours dropdown failed to populate
    if (colourId == -1) {
      alert("Cannot add a new legion. There was a problem retrieving the list of colours from the server.");
      return;
    }
    
    const self = this;
    axios.post(`http://localhost:3001/legions/${legionName}/${regionId}/${colourId}`)
    .then(() => {        
      this.setState({
        addLegionModalOpen: false,
        moveLegionModalOpen: false,
      }, () => {
        this.getMapData();
      });
    })    
    .catch((error, response) => {      
      console.error(error.response.data);
      this.setState({
        serverError: error.response.data,
      })
    })
    .finally(() => { /*do nothing */ });
  }

  /**
   * Move a legion from one region to another
   */
  moveLegion(legionId, sourceRegionId, destnRegionId, colourId) {

    axios.put(`http://localhost:3001/legions/${legionId}/${sourceRegionId}/${destnRegionId}/${colourId}`)
    .then(() => {        
      this.getMapData();
    })    
    .catch((error) => {      
      console.error("Failed to move the legion", error);
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

    // User is attempting to move the legion
    if (this.state.selectedLegion) {
      this.moveLegion(this.state.selectedLegion.id,
        this.state.selectedLegion.regionId,
        layer.feature.properties.id,
        this.state.selectedLegion.colourId);
        return;
    }
    
    this.setState({
      addLegionModalOpen: true,
      selectedRegion: layer,
    })
  }

  /**
   * User has clicked a legion icon
   */
  legionClicked(legion) {        
    const selectedRegion = this.state.mapData.find(
      (region) => region.properties.id === legion.regionId
    );

    this.setState({
      selectedRegion,
      selectedLegion: legion,
    });
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
    
    return (
      <Map
        ref="worldMap"
        crs={CRS.Simple}
        center={[766, 1024]} 
        zoom={this.state.zoomLevel} 
        minZoom={-1.7}
        maxZoom={0.6}
        zoomSnap={0.1}
        maxBoundsViscosity={0}
        className={styles.mapLayer}
        attributionControl={false}
        zoomControl={false}
        maxBounds={bounds}
        onZoom={this.mapZoom}      
      >
        {/* the map image */}
        <ImageOverlay 
          url={mainImage} 
          bounds={bounds}
        />

        {/*GeoJSON */}
        <GeoJSON           
          key={this.state.mapKey}
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

  /**
   * User is zooming in/out on the map
   */
  mapZoom() {
    this.setState({
      zoomLevel: this.refs.worldMap.leafletElement.getZoom(),
    });
  }

  /**
   * Generate all markers for the map
   */
  generateMarkers() {

    let legionMarkers = [];

    this.state.legions.forEach((legion) => {      
      const color = legion.rgb;
      const colorName = legion.colour;
      //const legionClass = `${colorName}Legion`;
                  
      // Still not sure why the image overlay has these wierd zoom levels.
      // Small hack to compensate for this. Hopefully I can find the time to look 
      // into this in the future.
      let currentZoomLevel = this.state.zoomLevel;      
      currentZoomLevel += 1.7;
      currentZoomLevel *= 10;
      
      const iconSize = [15 + currentZoomLevel, 15 + currentZoomLevel];
      let isLegionActive = 
        (this.state.selectedLegion && this.state.selectedLegion.id === legion.id) ? true : false;
      
      const legionIcon = getLegionIcon(colorName, color, army, iconSize, isLegionActive);  

      // get the region this army is currently in
      const mapData = this.state.mapData;      
      const region = mapData.find(r => r.properties.id == legion.regionId);
      
      // create the marker to add to Leaflet
      const legionMarker = React.createElement(
        Marker, 
        {
          position: this.calculateRegionCenter(region),
          icon: legionIcon,
          key: uuidv4(),
          onClick: () => this.legionClicked(legion)
        },
        <Popup>
          {
            `${legion.id} ${legion.name}`
          }
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
    // calculate region max width and height
    const regionWidth = (region.geometry.coordinates[0][3][0] - region.geometry.coordinates[0][0][0]) / 2;
    const regionHeight = (region.geometry.coordinates[0][4][1] - region.geometry.coordinates[0][2][1]) / 2;
    
    const regionCenter = [
      region.geometry.coordinates[0][2][1] + regionHeight,
      region.geometry.coordinates[0][0][0] + regionWidth      
    ];

    return regionCenter    
  }


  /**
   * Opens/closes the add legion modal
   */
  toggleAddLegionModal(openModal) {        
    this.setState({
      addLegionModalOpen: !openModal,
      moveLegionModalOpen: false,
    })
  }

  /**
   * Opens/closes the move legion modal
   */
  toggleMoveLegionModal(openModal) {        
    this.setState({
      addLegionModalOpen: false,
      moveLegionModalOpen: !openModal,
    })
  }

  /**
   * Render.
   */
  render() {
    let legionModal = (!this.state.addLegionModalOpen) ? null : (
      <LegionModal 
        closeModal={() => this.toggleAddLegionModal(true)}
        selectedRegion={this.state.selectedRegion}
        legionColours={this.state.legionColours}
        addLegionCallback={this.addLegion}
        map={mainImage}
        errorMessage={this.state.serverError}
      />
    );

    return(
      <React.Fragment>
        {legionModal}
        <div>            
          <div className={styles.interactiveMapWrapper}>
            {this.buildMap()}   
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default enhanceWithClickOutside(InteractiveMap);




InteractiveMap.propTypes = {
  areaSelected: PropTypes.func.isRequired,
};