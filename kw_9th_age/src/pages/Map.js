// npm imports
import React, { Component } from 'react';
import ImageMapper from 'react-image-mapper';
import { FaGlobeAfrica} from 'react-icons/fa';

// Custom components
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';

// Utility imports
import {MAP} from "../utilities/world_image_map"

// Style imports
import styles from './styles/map-page.scss';

// Image imports
import mainImage from '../images/world.png';

/**
 * Map page to display the interactive world map.
 * Current goals for this page:
 * 1) Create a fantasy world map with identifiable borders
 * 2) Create a sitemap including terrain features. Add to world_image_map.js
 * 3) When the user selects a territory, and clicks 'generate, a modal dialogue
 *    will appears and then output the result. Gonna try to make this part look
 *    a bit flashy.
 */
class MapPage extends Component {

  /**
   * Constructor.   
   */
  constructor(props) {
    super(props);

    // nothing selected by default
    this.state = {
      selectedRegion: {
        coordinates: [0,0,0],
        name: "N/A",
        terrain: ["N/A"],
      },
      currentRegion: {
        coordinates: [0,0,0],
        name: "N/A",
        terrain: ["N/A"],
      }          
    }

    this.areaClicked = this.areaClicked.bind(this);
    this.areaEntered = this.areaEntered.bind(this);
    this.generateMapClicked = this.generateMapClicked.bind(this);
  }

  /**
   * User has clicked an area on the map
   */
  areaClicked(area) {    
    this.setState({
      selectedRegion: {
        coordinates: area.coords,
        name: area.name,
        terrain: area.terrain
      }      
    });
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

  generateMapClicked() {
    alert("Generating the map....");
  }

  /**
   * Render.
   */
  render() {
    return (
      <Layout>
        <div className={styles.mapPage}>
          
          {/* Page header */}
          <div className={styles.header}>
            <SectionHeader 
              text="Welcome to Kea'wole" 
              icon={<FaGlobeAfrica />} 
              headerType="h1" 
            />
          </div>         
  
          {/* Play with image here */}
          <div className={styles.worldMap} section="image_start">            
            <ImageMapper section="the_image_mapper"
              src={mainImage}
              map={MAP}
              className={styles.worldMap} 
              width={1200}
              height={600}
              imgWidth={1810}
              lineWidth={5}
              onClick={area => this.areaClicked(area)}
              onMouseEnter={area => this.areaEntered(area)}
            />      
            
  
            {/*
            <div className={styles.info} >
              <div>Map Info</div>
              <div>&nbsp;</div>
              <div>SELECTED</div>
              <div>
                Coordinates: {this.state.selectedRegion.coordinates.toString()}
              </div>
              <div>
                Region Name: {this.state.selectedRegion.name}
              </div>
              <div>
                Terrain: {this.state.selectedRegion.terrain.toString()}
              </div>

              <div>&nbsp;</div>
              <div>CURRENT</div>
              <div>
                Coordinates: {this.state.currentRegion.coordinates.toString()}
              </div>
              <div>
                Region Name: {this.state.currentRegion.name}
              </div>
              <div>
                Terrain: {this.state.currentRegion.terrain.toString()}
              </div>

              <div>&nbsp;</div>
              <div>
                <button onClick={this.generateMapClicked}>Generate Map</button>
              </div>
            </div>
            */}
          </div>
        </div>      
      </Layout>
    );
  }  
};

export default MapPage;