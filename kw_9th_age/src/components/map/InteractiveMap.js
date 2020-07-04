// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, ImageOverlay, Marker, Popup, GeoJSON } from 'react-leaflet';
import {CRS} from 'leaflet';
import enhanceWithClickOutside from 'react-click-outside';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import {AiOutlineFullscreen, AiOutlineFullscreenExit} from 'react-icons/ai';

// Custom Components
import LegionModal from './LegionModal';
import {scaleGeoJSONData, getLegionIcon} from '../../helpers/HelperMethods';

// Style imports
import styles from './interactive-map.scss';

// Image imports
import mainImage from '../../images/keawol_empty.jpg';
import army from '../../images/army.png';

// Constants
const BASE_ZOOM = -1.3;
const MIN_ZOOM_REGULAR = -1.5;
const MAX_ZOOM_REGULAR = -1.0;
const MIN_ZOOM_FULLSCREEN = -1.5;
const MAX_ZOOM_FULLSCREEN = -0.5;
const MAP_SIZE_WIDTH = 2048.0;
const MAP_SIZE_HEIGHT = 1536.0;

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
      mapDataFullscreen: [{}],
      // size of the map,
      mapSize: [MAP_SIZE_WIDTH, MAP_SIZE_HEIGHT],
      // list of legions that are currently on the map
      legions: [],
      // list colours to be used in the legion colour dropdown
      legionColours: [],
      // current zoom level of the Leaflet map
      zoomLevel: BASE_ZOOM,
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
      // indicates if the map should be displayed in full screen
      fullScreen: false,
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
    this.mousePressed = this.mousePressed.bind(this);   
    this.disableContextMenu = this.disableContextMenu.bind(this);
    this.toggleFullScreen = this.toggleFullScreen.bind(this);
    this.keyPressed = this.keyPressed.bind(this);
    this.resetMapZoomLevels = this.resetMapZoomLevels.bind(this);
    this.foo = this.foo.bind(this);
    
  }

  /**
   * ComponentDidMount.
   */
  componentDidMount() {   
    document.addEventListener("mousedown", this.mousePressed, false); 
    document.addEventListener("contextmenu", this.disableContextMenu);
    document.addEventListener("keydown", this.keyPressed, false);
    this.getLegionColours();
    this.getMapData();    
  }

  /**
   * componentWillUnmount
   */
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.mousePressed, false);
    document.removeEventListener("contextmenu", this.disableContextMenu);
    document.removeEventListener("keydown", this.keyPressed, false);
  }

  /**
   * User has pressed a mouse button
   */
  mousePressed(event) {
    if (event.which === 3) {            
      this.setState({
        selectedRegion: null,
        selectedLegion: null,
        addLegionModalOpen: false,        
      })
    }
  }

  /**
   * User has pressed a keyboard key
   */
  keyPressed(event) {
    // escape key
    if (event.keyCode === 27) {
      /*
      this.setState({
        fullScreen: false,
        mapKey: uuidv4(),
        zoomLevel: BASE_ZOOM,
      },() => {        
        this.refs.worldMap.leafletElement.invalidateSize();
        this.resetMapZoomLevels(false);
      })
      */
     this.toggleFullScreen(false);
    }
  }

  /**
   * Resets the maps min/max zoom levels
   */
  resetMapZoomLevels(isFullScreen) {    
    // update the min/max zoom levels of the map
    this.refs.worldMap.leafletElement.setMinZoom(
      isFullScreen ? MIN_ZOOM_FULLSCREEN : MIN_ZOOM_REGULAR);
    this.refs.worldMap.leafletElement.setMaxZoom(
      isFullScreen ? MAX_ZOOM_FULLSCREEN : MAX_ZOOM_REGULAR);
  }

  /**
   * Disable the right-click context menu
   */
  disableContextMenu(event) {    
    //event.preventDefault();
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
    console.log("get map data");

    axios.get('http://localhost:3001/regions')
    .then((response) => {  
      const mapData = response.data;   
      const mapKey = uuidv4();
      
      self.setState({
        mapData,
        mapDataFullscreen: mapData,
        /*
        mapDataFullscreen: scaleGeoJSONData(
          mapData, 
          MAP_SIZE_WIDTH / window.innerWidth, 
          window.innerHeight / MAP_SIZE_HEIGHT,
        ),
        */
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
    .catch((error) => {      
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

    if (sourceRegionId === destnRegionId) {
      console.error("Can't move a legion onto the same region");
      return;
    }

    axios.put(`http://localhost:3001/legions/${legionId}/${sourceRegionId}/${destnRegionId}/${colourId}`)
    .then(() => {        
      this.getMapData();
    })    
    .catch((error) => {      
      console.error("Failed to move the legion:", error.response.data);
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
    //const popup = `<Popup>${feature.properties.name}</Popup>`;
    //layer.bindPopup(popup);
    
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
    const containerWidth = MAP_SIZE_WIDTH;// (this.state.fullScreen) ? window.innerWidth: MAP_SIZE_WIDTH;
    const containerHeight = MAP_SIZE_HEIGHT;// (this.state.fullScreen) ? window.innerHeight: MAP_SIZE_HEIGHT;
    const boundX = containerWidth;
    const boundY = containerHeight;
    
    // why is it (y,x)???
    const bounds = [[0,0], [boundY, boundX]];
    const center = [containerHeight / 2, containerWidth / 2];

    console.log("map bounds", bounds);
    
    return (
      <Map
        ref="worldMap"
        crs={CRS.Simple}        
        center={center} 
        maxBounds={bounds}
        zoom={this.state.zoomLevel} 
        onZoom={this.mapZoom}  
        zoomSnap={0.1}
        minZoom={this.state.fullScreen ? MIN_ZOOM_FULLSCREEN : MIN_ZOOM_REGULAR}
        maxZoom={this.state.fullScreen ? MAX_ZOOM_FULLSCREEN : MAX_ZOOM_REGULAR}       

        maxBoundsViscosity={1}
        className={styles.mapLayer}
        attributionControl={false}
        zoomControl={false}
        preferCanvas={true}
        onmoveend={this.foo}    
           
      >
        {/* the map image  */}
        <ImageOverlay
          url={mainImage}          
          bounds={bounds}
          center={center} 
          className={styles.mapImage}
        />

        {/* Fullscreen button */}
        {
          this.state.fullScreen ? 
            <AiOutlineFullscreenExit 
              className={classNames(styles.fullScreenBtn, styles.fullScreenBtnFullscreen)} 
              onClick={() => this.toggleFullScreen(false)} 
            /> :
            <AiOutlineFullscreen className={styles.fullScreenBtn} onClick={() => this.toggleFullScreen(true)} />
            
        } 

        {/*GeoJSON */}
        <GeoJSON       
          ref="foo"    
          key={this.state.mapKey}
          data={this.state.fullScreen > 0 ? this.state.mapDataFullscreen : this.state.mapData} 
          style={{
            "color": "rgb(0, 0, 0)",
            "weight": "1",
            "fillColor": "rgb(255,0,0)",
            "fillOpacity": "0", 
          }} 
          onEachFeature={this.onEachFeature}
          //className={styles.test} 
          bounds={bounds}     
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
                  
      // create the legion icon
      const baseSize = (this.state.fullScreen) ? 35 : 30;
      const zoomScale = this.state.zoomLevel * 10 
      const iconSize = [baseSize + zoomScale, baseSize + zoomScale];
      const isLegionActive = 
        (this.state.selectedLegion && this.state.selectedLegion.id === legion.id) ? true : false;      
      const legionIcon = getLegionIcon(colorName, color, army, iconSize, isLegionActive);  

      // get the region this army is currently in
      const mapData = (this.state.fullScreen) ? this.state.mapDataFullscreen : this.state.mapData;      
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
   * Turn on full screen mode.
   */
  toggleFullScreen(isFullScreen) {
    const mapSize = (isFullScreen) ? 
      [MAP_SIZE_WIDTH, MAP_SIZE_HEIGHT] :
      [MAP_SIZE_WIDTH, MAP_SIZE_HEIGHT]
    this.setState({
      fullScreen: isFullScreen,
      zoomLevel: BASE_ZOOM,
      mapKey: uuidv4(),
      mapSize,
    }, () => {
      this.resetMapZoomLevels(isFullScreen);          
      this.refs.worldMap.leafletElement.invalidateSize(false);
      this.refs.foo.leafletElement.bringToFront();
      
    })
  }

  foo() {
    //alert("2");
    console.log("foo");
    this.refs.worldMap.leafletElement.invalidateSize();
    this.refs.foo.leafletElement.bringToFront();
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

    const classes = (this.state.fullScreen) ? 
      classNames(styles.interactiveMapWrapper, styles.fullScreen) : styles.interactiveMapWrapper;    
    return(
      <React.Fragment>
        {legionModal}
        <div className={classes}>          
          {this.buildMap()}   
        </div>        
      </React.Fragment>
    );
  }
}

export default enhanceWithClickOutside(InteractiveMap);


InteractiveMap.propTypes = {
  areaSelected: PropTypes.func.isRequired,
};