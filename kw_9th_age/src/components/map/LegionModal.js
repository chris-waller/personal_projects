// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// helper methods
import {getLegionIcon} from '../../helpers/HelperMethods';

// Image imports
import army from '../../images/army.png';

// Style imports
import styles from './legion-modal.scss';

const REGION_IMAGE_WIDTH = 204;
const REGION_IMAGE_HEIGHT = 217;

/**
 * Display and interacte with the world map
 */
class LegionModal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      canvasContextURL: "",
      selectedLegionColour: null,
      addLegionError: props.errorMessage
    }

    this.closeModal = this.closeModal.bind(this);
    this.modalClicked = this.modalClicked.bind(this);
    this.addLegion = this.addLegion.bind(this);
    this.dropdownChanged = this.dropdownChanged.bind(this);
    this.keyPressed = this.keyPressed.bind(this);
  }

  componentDidMount() {
    // listen for the escape key
    document.addEventListener("keydown", this.keyPressed, false);

    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
            
    const coords = this.props.selectedRegion.feature.geometry.coordinates;
    const sx = coords[0][0][0];
    const sy = 1522 - coords[0][4][1];
    const width = coords[0][3][0] - coords[0][0][0];
    const height = coords[0][4][1] - coords[0][2][1];
    
    this.refs.image.onload = () => {
      ctx.drawImage(this.refs.image, sx, sy, width, height, 0, 0, REGION_IMAGE_WIDTH, REGION_IMAGE_HEIGHT);      

      const rgb = `rgb(${this.refs.colourId.value.substring(this.refs.colourId.value.indexOf("|") + 1)})`;
      
      this.setState({
        canvasContextURL: canvas.toDataURL(),
        selectedLegionColour: rgb,
      })
    }
  }

  /**
   * componentWillUnmount
   */
  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPressed, false);
  }

  /**
   * getDerivedStateFromProps
   */
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      addLegionError: nextProps.errorMessage? nextProps.errorMessage : prevState.addLegionError,
    };
  }

  /**
   * Tell the parent it's time to close the modal
   */
  closeModal() {
    //close modal
    this.props.closeModal();
  }

  /**
   * User has pressed a keyboard key
   */
  keyPressed(event) {

    // escape key
    if (event.keyCode === 27) {
      this.closeModal();
    }

    // enter key
    if (event.keyCode === 13) {
      this.addLegion();
    }

  }

  dropdownChanged() {
    let rgb = `rgb(${this.refs.colourId.value.substring(this.refs.colourId.value.indexOf("|") + 1)})`;
    this.setState({
      selectedLegionColour: rgb,
    })
  }

  /**
   * User has clicked inside the main modal. Need to stop the parent onClick()
   * from firing as it will close the modal. 
   */
  modalClicked(e) {
    e.stopPropagation();
  }

  /**
   * Populates a dropdown with a list of colours from the db
   */
  buildLegionColoursDropdown() {
    const legionColours = [];

    this.props.legionColours.forEach((colour) => {   
      const value = `${colour.id}|${colour.rgb}`;
      legionColours.push(
        <option 
          value={value}
          key={colour.rgb}
          style={{backgroundColor: `rgb(${colour.rgb})`}}
        >
          {colour.name}
        </option>);
    })      

    return React.createElement(
      "select", 
      {
        ref: "colourId",
        onChange: this.dropdownChanged
      }, 
      legionColours
    );
  }

  /**
   * Add a legion to the map
   */
  addLegion() {
    const legionName = this.refs.legionName.value;
    if (legionName === "") {
      this.setState({
        addLegionError: "Must specify a legion name.",
      });
      return;
    }

    this.setState({
      addLegionError: null,
    });
    const regionId = this.refs.regionId.value;
    const colourId = this.refs.colourId.value.substring(0, this.refs.colourId.value.indexOf("|"));      
    this.props.addLegionCallback(legionName, regionId, colourId);
  }


  /**
   * Render.
   */
  render() {
    const regionInfo = this.props.selectedRegion.feature;
    const regionId = regionInfo.properties.id;
    const regionName = regionInfo.properties.name;
    const regionColour = regionInfo.properties.fillColor;
    //const regionColourName = this.refs.colourId.value; 

    return (
      <div className={styles.legionModal} onClick={this.closeModal}>    
        <canvas 
          ref="canvas" 
          width={REGION_IMAGE_WIDTH} 
          height={REGION_IMAGE_HEIGHT} 
          className={styles.hidden}

        />       
        <img ref="image" src={this.props.map} className={styles.hidden} />
        <div 
          className={styles.legionModalInner} 
          onClick={this.modalClicked} 
          style={{backgroundImage: 'url('+ this.state.canvasContextURL +')'}}
        >
          
          {/*<button onClick={this.closeModal} className={styles.closeButton}>Close</button>*/}
          
          <div className={styles.addLegion}>   
            <div className={styles.inputRow}>
              <span>Name:</span> 
              <input type="text" ref="legionName" size="35"  placeholder="Enter Legion Name"></input>
            </div>
            <div className={styles.inputRow}>
              <span>Colour:</span> 
              {this.buildLegionColoursDropdown()} 
            </div>  
            <div className={styles.inputRow}>
              <span>Region Name:</span>
              <input type="text" ref="regionName" readOnly value={regionName} className={styles.disabled} />
            </div>            
            <div className={styles.inputRow}>
              <span>Region ID:</span>
              <input type="text" ref="regionId" readOnly value={regionId} className={styles.disabled} size="4" />
            </div>            
            <button onClick={this.addLegion} className={styles.addLegion} >Add Legion</button>          
          </div>  

          <div className={styles.bottomArea}>
            <div className={styles.error}>
              {this.state.addLegionError}
            </div>
            <div className={styles.previewImage}>
              <img 
                src={army} 
                style={{backgroundColor: `${this.state.selectedLegionColour}`}} 
                className={styles.armyIcon}
              />
            </div>
          </div>  


        </div>      
      </div>
    );
  }


}

export default LegionModal;

LegionModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  addLegionCallback: PropTypes.func.isRequired,
  selectedRegion: PropTypes.object.isRequired,
  legionColours: PropTypes.array.isRequired,
  map: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
}