// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Style imports
import styles from './legion-modal.scss';

/**
 * Display and interacte with the world map
 */
class LegionModal extends Component {

  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
    this.modalClicked = this.modalClicked.bind(this);
    this.addLegion = this.addLegion.bind(this);
  }

  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.refs.image;
    
    const coords = this.props.selectedRegion.feature.geometry.coordinates;
    const sx = coords[0][0][0];
    const sy = coords[0][1][1];
    const width = coords[0][3][0] - sx;
    const height = coords[0][5][1] - sy;

    console.log(`x: ${sx}  y: ${sy}`)
    console.log(`width: ${width}  height: ${height}`)

    img.onload = () => {
      //ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
      ctx.drawImage(img, sx, sy, width, height, 0, 0, 100, 100);
      ctx.font = "40px Courier";
      //ctx.fillText("test", 100, 75);
    }
  }
  
  /**
   * Tell the parent it's time to close the modal
   */
  closeModal() {
    //close modal
    this.props.closeModal();
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
      legionColours.push(
        <option 
          value={colour.id}
          key={colour.id}
          style={{backgroundColor: `rgb(${colour.rgb})`}}
        >
          {colour.name}
        </option>);
    })      

    return React.createElement(
      "select", 
      {ref: "colourId"}, 
      legionColours
    );
  }

  /**
   * 
   */
  addLegion() {
    const legionName = this.refs.legionName.value;
    const regionId = this.refs.regionId.value;
    const colourId = this.refs.colourId.value;  
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
    

    return (
      <div className={styles.legionModal} onClick={this.closeModal}>    
        <div className={styles.legionModalInner} onClick={this.modalClicked}>
          
          <button onClick={this.closeModal} className={styles.closeButton}>Close</button>          
          
          <div>   
            <div>Name <input type="text" ref="legionName" ></input></div>
            <div>Region ID <input type="text" ref="regionId" readOnly value={regionId} /></div>
            <div>Colour {this.buildLegionColoursDropdown()} </div>
            <button onClick={this.addLegion} >Add Legion</button>
        </div>
        
        <div>
          <canvas ref="canvas" width={500} height={500} />
          <img ref="image" src={this.props.map} className={styles.hidden} />
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
}