// npm imports
import React, { Component } from 'react';
import { FaGlobeAfrica} from 'react-icons/fa';

// Custom components
import Layout from '../components/Layout';
import SectionHeader from '../components/SectionHeader';
import InteractiveMap from '../components/map/InteractiveMap';

// Style imports
import styles from './styles/map-page.scss';



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
    }

    this.areaSelected = this.areaSelected.bind(this);
    this.generateMapClicked = this.generateMapClicked.bind(this);
  }

  /**
   * User has clicked an area on the map
   */
  areaSelected(area) { 
    this.setState({
      selectedRegion: {
        coordinates: area.coords,
        name: area.name,
        terrain: area.terrain
      }      
    });
    console.log(area)
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
            <InteractiveMap
              areaSelected={this.areaSelected}
            />           
            

            {/*
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
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
              <div>
                <button onClick={this.generateMapClicked}>Generate Map</button>
              </div>
            </div>
            */}
          </div>

          {/* Screen too small for this page */}
          <div className={styles.pageTooSmall}>
              <div>
                Your screen is too small to properly utilize this page.<br />
                Please use a larger screen to use this tool. Thank you.
              </div>
              <div
                className={styles.pageTooSmallImage} 
                title="Map of Kaewool"           
              />         
          </div> 


        </div>      
      
      </Layout>
    );
  }  
};

export default MapPage;